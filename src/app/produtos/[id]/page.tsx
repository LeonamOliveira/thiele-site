"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FeatureText } from "@/components/feature/interfaces/feature-text.interface";
import { featureMachineText } from "@/components/feature/machines-features";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const DetalhesProduto = () => {
  const { id } = useParams();
  const [produtoDetalhe, setProdutoDetalhe] = useState<FeatureText | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") {
      setLoading(false);
      setError("ID do produto inválido.");
      return;
    }

    const produto = featureMachineText.find((item) => item.id?.toString() === id);

    if (produto) {
      setProdutoDetalhe(produto);
      setLoading(false);
    } else {
      setLoading(false);
      setError(`Produto com ID ${id} não encontrado.`);
    }
  }, [id]);

  const handleClick = () => {
    toast.success("Redirecionando para o WhatsApp...");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Carregando detalhes do produto...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  if (!produtoDetalhe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Produto não encontrado.</div>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="container mx-auto p-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-80">
            {produtoDetalhe.image && (
              <Image
                src={produtoDetalhe.image}
                alt={produtoDetalhe.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{produtoDetalhe.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{produtoDetalhe.description}</p>

            {produtoDetalhe.specifications && produtoDetalhe.specifications.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Especificações Técnicas</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
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
          href={`https://wa.me/5511930111440?text=Olá, gostaria de saber mais sobre o produto: ${encodeURIComponent(
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

      <Footer />
    </>
  );
};

export default DetalhesProduto;
