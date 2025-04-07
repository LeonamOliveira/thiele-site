// src/app/produtos/[id]/page.tsx
"use client";
// src/app/produtos/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Usando useParams para pegar o ID da URL
import Image from 'next/image';
import { FeatureText } from '@/components/feature/interfaces/feature-text.interface';
import { featureMachineText } from "@/components/feature/machines-features";

const DetalhesProduto = () => {
  const { id } = useParams();  // Usando useParams para pegar o parâmetro da URL
  const [produtoDetalhe, setProdutoDetalhe] = useState<FeatureText | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || typeof id !== 'string') {
      setLoading(false);
      setError('ID do produto inválido.');
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
    <div className="container mx-auto p-8 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imagem do Produto */}
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

        {/* Detalhes do Produto */}
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

          {/* Adicionar mais detalhes aqui */}
          <div className="bg-gray-50 p-4 rounded-lg mt-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Outros Detalhes</h3>
            {/* Exemplo de outros detalhes, adicione o que for relevante */}
            <p className="text-sm text-gray-600">Outros detalhes do produto podem ser exibidos aqui.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesProduto;
