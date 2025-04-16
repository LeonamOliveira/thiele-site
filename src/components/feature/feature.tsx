"use client";
import React, { useState } from 'react';
import FeatureDialog from "./dialogMachine";
import { Button } from "@/components/ui/button";
import { Container, Section } from "../craft";
import { FeatureText } from './interfaces/feature-text.interface';
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MessageCircle } from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFeatures, setFilteredFeatures] = useState(features);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = features.filter((feature) => {
      return (
        feature.title.toLowerCase().includes(query) ||
        feature.description.toLowerCase().includes(query)
      );
    });
    
    setFilteredFeatures(filtered);
  };

  const handleClick = () => {
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <Section className="w-full">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-3 py-0">
          <h1
            className="!my-0"
            style={{ fontWeight: 300, fontSize: "56px", lineHeight: "62px", color: "#6C6C6C" }}
          >
            {title}
          </h1>
          {description.split("\n").map((line, index) => (
            <p key={index} className="font-light leading-[1.4] opacity-70">
              {line}
            </p>
          ))}{" "}
          <div className="not-prose flex items-center gap-2">
            {textButton?.trim() && (
              <motion.a
              href={link ?? "/"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 20px rgba(43,65,141,0.35)",
                    "0 0 0 rgba(0,0,0,0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Button
                  className="bg-[#B32C39] hover:bg-[#B32C39] text-white text-lg px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 flex items-center gap-3"
                  size="lg"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.div>
                  {textButton}
                </Button>
              </motion.div>
            </motion.a>
            )}
          </div>
        </div>
        <div className="not-prose relative flex h-80 overflow-hidden rounded-lg w-full">
          {media}
        </div>
      </Container>

      {barraDePesquisa && (
        <Container className="not-prose mb-4">
          <div className="w-full max-w-lg mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Pesquisar por título ou descrição..."
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </Container>
      )}

      <Container className="not-prose">
        <div className="flex flex-col gap-4">
          {children}
          <div className="mt-4 grid gap-2 md:mt-4 md:grid-cols-3">
            {filteredFeatures.map((feature) => (
              <FeatureDialog key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
