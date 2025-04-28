import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { featureMachineText } from "@/components/feature/machines-features";
import ProdutoClientUI from './produto-cliente';

export async function generateStaticParams() {
  const paths = featureMachineText.map((produto) => ({
    id: produto.id?.toString() ?? '',
  }));
  return paths.filter(path => path.id !== '');
}

type DetalhesProdutoPageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const DetalhesProdutoPage = async (props: DetalhesProdutoPageProps) => {
  const { id } = await props.params;

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