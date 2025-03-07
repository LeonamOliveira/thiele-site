import Header from "./header";
import Footer from "./footer";
import Feature from "../components/feature/feature";
import { featureMachineText } from "@/components/feature/machines-features";
import { CarouselMachine } from "@/components/carousel";
import imageChumbo from "../../public/assets/chumbo.png";
import imageReposicao from "../../public/assets/reposicao.jpeg";
import Image from "next/image";
import TH300 from "../../public/assets/TH300.png";
import TH800 from "../../public/assets/TH800 - 1.png";
import TH1000 from "../../public/assets/TH1000 - 1.png";
export default function Home() {
  const imagens = [TH300, TH800, TH1000];

  return (
    <>
      <Header />
      {/* <Image src={ImageMaquinas} width={500} height={300} alt="Image principal"/> */}
      <Feature
        title="Conheça nossas máquinas"
        description={`
          Tecnologia moderna para limpeza eficiente e sustentável. 
          Mais autonomia, praticidade e potência no seu trabalho.`}
        features={featureMachineText}
        media={<CarouselMachine images={imagens} />}
        textButton="Solicite um orçamento"
      />
      <Feature
        title="Transforme sua máquina de chumbo ácido em lítio"
        description={`
          Revolucione seus resultados com a tecnologia que está transformando o mercado.
        `}
        media={
          <Image src={imageChumbo} width={500} height={500} alt="Lavadora" />
        }
        textButton="Adquira seu kit agora"
      />
      <Feature
        title="Peças de Reposição"
        description={`
          Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.  
        `}
        media={
          <Image src={imageReposicao} width={400} height={40} alt="Reposição" />
        }
        textButton="Confira as peças disponíveis"
      />
      <Footer />
    </>
  );
}
