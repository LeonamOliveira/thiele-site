"use client";
import React, { useState, useEffect, useMemo } from 'react';
import FeatureDialog from "./dialogMachine"; 
import { Button as ShadcnButton } from "@/components/ui/button";
import { Container, Section } from "../craft";
import { FeatureText } from './interfaces/feature-text.interface';
import { motion, Variants } from "framer-motion";
import { toast } from "sonner";
import { MessageCircle, Search } from 'lucide-react';

const MotionButton = motion(ShadcnButton);

interface FeatureProps {
  id?: string;
  title: string;
  description: string;
  features?: FeatureText[];
  media?: React.ReactNode;
  textButton?: string;
  link?: string;
  children?: React.ReactNode;
  barraDePesquisa?: boolean; 
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  features = [],
  media,
  textButton,
  link,
  children,
  barraDePesquisa = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(''); 

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(inputValue.toLowerCase());
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const filteredFeatures = useMemo(() => {
    if (!debouncedSearchQuery) {
      return features;
    }
    return features.filter(
      (feature) =>
        feature.title.toLowerCase().includes(debouncedSearchQuery) ||
        feature.description.toLowerCase().includes(debouncedSearchQuery)
    );
  }, [features, debouncedSearchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleWhatsAppClick = () => {
    toast.success("Redirecionando para o WhatsApp...");
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const buttonPulseAnimation = {
    scale: [1, 1.03, 1],
    boxShadow: [
      "0 0 0 rgba(0,0,0,0)",
      "0 0 20px rgba(179, 44, 57, 0.35)",
      "0 0 0 rgba(0,0,0,0)",
    ],
  };

  return (
    <Section
      className="w-full py-12 md:py-16 lg:py-20"
    >
      <Container className="grid items-start md:grid-cols-2 md:gap-8 lg:gap-12">
        <motion.div
          className="flex flex-col gap-4 md:gap-5"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1
            variants={itemVariants}
            className="!my-0 text-3xl font-light text-gray-700 sm:text-4xl md:text-5xl lg:text-[52px] leading-tight md:leading-snug dark:text-gray-300"
          >
            {title}
          </motion.h1>

          <motion.div variants={itemVariants}>
            {description.split("\n").map((line, index) => (
              <p
                key={index}
                className="font-light text-sm sm:text-base md:text-lg leading-relaxed opacity-75 dark:opacity-80" // Responsive text, leading, opacity
              >
                {line}
              </p>
            ))}
          </motion.div>

          {textButton?.trim() && (
            <motion.div variants={itemVariants} className="mt-4 md:mt-6">
              <motion.a
                href={link ?? "#"}
                target={link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MotionButton
                  className="bg-[#B32C39] hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white text-sm px-5 py-2.5 md:text-base md:px-6 md:py-3 rounded-xl shadow-lg transition-colors duration-300 flex items-center gap-2.5 group"
                  animate={buttonPulseAnimation}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:-rotate-12" />
                  {textButton}
                </MotionButton>
              </motion.a>
            </motion.div>
          )}
        </motion.div>

        {media && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="not-prose relative flex h-64 min-h-[200px] sm:h-72 md:h-80 lg:h-[420px] overflow-hidden rounded-lg w-full mt-8 md:mt-0"
          >
            {media}
          </motion.div>
        )}
      </Container>

      {barraDePesquisa && features.length > 0 && (
        <Container className="not-prose my-8 md:my-10 lg:my-12">
          <motion.div
            className="w-full max-w-xl mx-auto"
            initial={{ opacity: 0, y:10 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative">
              <input
                type="search"
                value={inputValue}
                onChange={handleSearchChange}
                placeholder="Pesquisar por título ou descrição..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-600 bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          </motion.div>
        </Container>
      )}

      {(children || filteredFeatures.length > 0) && (
         <Container className="not-prose mt-8 md:mt-10 lg:mt-12">
          <motion.div
            className="flex flex-col gap-4 md:gap-6"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {children}
            {filteredFeatures.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredFeatures.map((feature) => (
                  <motion.div key={feature.title} variants={itemVariants}>
                    <FeatureDialog feature={feature} />
                  </motion.div>
                ))}
              </div>
            ) : (
              inputValue && barraDePesquisa && (
                <motion.p
                  variants={itemVariants}
                  className="text-center text-gray-600 dark:text-gray-400 py-8"
                >
                  Nenhum resultado encontrado para {inputValue}.
                </motion.p>
              )
            )}
          </motion.div>
        </Container>
      )}
    </Section>
  );
};

export default Feature;