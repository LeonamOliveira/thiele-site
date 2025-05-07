"use client";

import React from "react";
import CarouselSwiper from "@/components/carousel-swiper";
import { FeatureText } from "@/components/feature/interfaces/feature-text.interface";
import { motion, Variants } from "framer-motion";
import { Button as ShadcnButton } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const MotionButton = motion(ShadcnButton);

const WHATSAPP_NUMBER = "5511930111440";

interface ProdutoClientUIProps {
  produtoDetalhe: FeatureText;
}

export default function ProdutoClientUI({ produtoDetalhe }: ProdutoClientUIProps) {
  const handleWhatsAppClick = () => {
    toast.success("Redirecionando para o WhatsApp...");
  };

  const whatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá, gostaria de saber mais sobre o produto: ${produtoDetalhe.title}`
  )}`;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonPulseAnimation = {
    scale: [1, 1.03, 1],
    boxShadow: [
      "0 0 0 rgba(43, 65, 141, 0)",
      "0 0 15px rgba(43, 65, 141, 0.3)",
      "0 0 0 rgba(43, 65, 141, 0)",
    ],
  };

  return (
    <div className="w-full overflow-x-hidden"> {/* Evitar overflow horizontal */}
      {/* Seção Principal do Produto */}
      <motion.div
        className="container mx-auto px-4 py-6 sm:px-6 md:py-8 max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-x-8 gap-y-6"> 
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 flex-shrink-0"
          >
            <div className="relative aspect-[16/10] sm:aspect-video md:aspect-[16/10] w-full rounded-md overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800">
              {produtoDetalhe.carousel && produtoDetalhe.carousel.length > 0 ? (
                <CarouselSwiper images={produtoDetalhe.carousel} className="absolute inset-0 w-full h-full" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 p-4">
                  Nenhuma imagem disponível.
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 flex flex-col gap-2 sm:gap-3"
          >
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 sm:text-3xl">
              {produtoDetalhe.title}
            </h1>
            <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line sm:text-base">
              {produtoDetalhe.description.split('\n').map((line, index) => (
                <p key={index} className={index > 0 ? "mt-2" : ""}>{line}</p>
              ))}
            </div>

            {produtoDetalhe.specifications && produtoDetalhe.specifications.length > 0 && (
              <div className="mt-3 sm:mt-4">
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-1.5 sm:text-xl sm:mb-2">
                  Especificações Técnicas
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600 dark:text-gray-300 sm:text-sm sm:space-y-1.5">
                  {produtoDetalhe.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 md:py-16 max-w-xl flex flex-col items-center text-center">
        <motion.h3
         className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4 sm:text-xl sm:mb-6"
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2, duration: 0.4 }}
        >
          Ficou com dúvidas ou quer saber mais?
        </motion.h3>
        <motion.a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="inline-block" 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MotionButton
            className="bg-[#2B418D] hover:bg-[#223471] dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-300 flex items-center gap-2 group text-sm px-5 py-2.5 sm:text-base sm:px-6 sm:py-3"
            animate={buttonPulseAnimation}
            transition={{
              duration: 2.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-rotate-12" />
            Contate via WhatsApp
          </MotionButton>
        </motion.a>
      </div>
    </div>
  );
}