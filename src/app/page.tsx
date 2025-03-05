import Header from "./header";
import Machines from "./machines";
import Footer from "./footer";
import Feature from "../components/feature/feature";
import { featureMachineText } from "@/components/feature/machines-features";
import { CarouselDemo } from "@/components/carousel";
import imageChumbo from '../../public/assets/chumbo.png';
import imageReposicao from '../../public/assets/reposicao.jpeg';
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Machines />
      <Feature
        title="Conheça nossas máquinas"
        description={`
          Tecnologia moderna para limpeza eficiente e sustentável. 
          Mais autonomia, praticidade e potência no seu trabalho.`}
        features={featureMachineText} 
        media={<CarouselDemo />}
        textButton="Solicite um orçamento"
        />
      <Feature 
        title="Transforme sua máquina de chumbo ácido em lítio"
        description={`
          Revolucione seus resultados com a tecnologia que está transformando o mercado.
        `}
        media={<Image src={imageChumbo} width={500} height={500} alt="Lavadora"/>}
        textButton="Adquira seu kit agora"
        />
      <Feature 
        title="Peças de Reposição"
        description={`
          Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.  
        `}
        media={<Image src={imageReposicao} width={400} height={40} alt="Reposição"/>}
        textButton="Confira as peças disponíveis"
      />
      <Footer />
    </div>
  );
}
