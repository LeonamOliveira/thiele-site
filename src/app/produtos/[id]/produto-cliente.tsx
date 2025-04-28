"use client"; // Mark this as a Client Component

import React from "react";
import CarouselSwiper from "@/components/carousel-swiper";
import { FeatureText } from "@/components/feature/interfaces/feature-text.interface";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ProdutoClientUIProps {
  produtoDetalhe: FeatureText;
}

export default function ProdutoClientUI({ produtoDetalhe }: ProdutoClientUIProps) {
  const handleClick = () => {
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <>
      <div className="container mx-auto p-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-80">
            {produtoDetalhe.carousel && (
              <CarouselSwiper images={produtoDetalhe.carousel} />
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ color: "#6C6C6C" }}>
              {produtoDetalhe.title}
            </h1>
            <p className="text-lg mb-4" style={{ color: "#6C6C6C" }}>
              {produtoDetalhe.description}
            </p>

            {produtoDetalhe.specifications && produtoDetalhe.specifications.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-3" style={{ color: "#6C6C6C" }}>
                  Especificações Técnicas
                </h2>
                <ul className="list-disc pl-6 space-y-2" style={{ color: "#6C6C6C" }}>
                  {produtoDetalhe.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 pb-16 max-w-5xl flex justify-center">
        <motion.a
          href={`https://wa.me/5511930111440?text=Olá, gostaria de saber mais sobre o produto: ${encodeURIComponent( // Replace number
            produtoDetalhe.title
          )}`}
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
              className="bg-[#2B418D] hover:bg-[#1f2f6a] text-white text-lg px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 flex items-center gap-3"
              size="lg"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.div>
              Falar no WhatsApp
            </Button>
          </motion.div>
        </motion.a>
      </div>
    </>
  );
}