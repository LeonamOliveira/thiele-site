import Header from "./header";
import Footer from "./footer";
import Feature from "../components/feature/feature";
import { featureMachineText } from "@/components/feature/machines-features";
import imageChumbo from "../../public/assets/chumbo.png";
import imageReposicao from "../../public/assets/reposicao.jpeg";
import Image from "next/image";
import CarouselSwiper from "@/components/carousel-swiper";
export default function Home() {
  return (
    <>
      <Header />
      <Feature
        title="Conheça as lavadoras Thiele"
        description={`
          Tecnologia moderna para limpeza eficiente e sustentável. 
          Mais autonomia, praticidade e potência no seu trabalho.`}
        features={featureMachineText}
        media={<CarouselSwiper />}
        textButton="Solicite um orçamento"
        link="http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
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
        link="kit-transformador"
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
        link="pecas-de-reposicao"
      />
      <Footer />
    </>
  );
}
