// NO "use client" here - This is now primarily a Server Component

import React from "react";
import Header from "@/app/header"; // Assuming Header is compatible
import Footer from "@/app/footer"; // Assuming Footer is compatible
import { featureMachineText } from "@/components/feature/machines-features";
import ProdutoClientUI from './produto-cliente'; // Import the new Client Component

export async function generateStaticParams() {
  const paths = featureMachineText.map((produto) => ({
    id: produto.id?.toString() ?? '',
  }));
  return paths.filter(path => path.id !== '');
}

interface DetalhesProdutoProps {
  params: {
    id: string;
  };
}

const DetalhesProdutoPage = async ({ params }: DetalhesProdutoProps) => {
  const { id } = await params;

  const produtoDetalhe = featureMachineText.find(
    (item) => item.id?.toString() === id
  );

  if (!produtoDetalhe) {
    return (
         <>
           <Header />
           <div className="flex justify-center items-center h-screen">
             <div className="text-xl font-semibold text-red-500">Produto com ID {id} não encontrado.</div>
           </div>
           <Footer />
         </>
       );
  }

  return (
    <>
      <Header />
      <main>
        <ProdutoClientUI produtoDetalhe={produtoDetalhe} />
      </main>
      <Footer />
    </>
  );
};

export default DetalhesProdutoPage;