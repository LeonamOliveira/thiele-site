// import Header from "./header";
// import Footer from "./footer";
// import Feature from "../components/feature/feature";
// import CarouselSwiper from "@/components/carousel-swiper";
// import Image from "next/image";
// import imageChumbo from "../../public/assets/chumbo.png";
// import { featureMachineText } from "@/components/feature/machines-features";
// import { Feedback } from "@/components/feedback";

// import imageTH100 from "../../public/assets/TH100/TH100 - 1.png";
// import imageTH300 from "../../public/assets/TH300.png";
// import imageTH310 from "../../public/assets/TH310.png";
// import imageTH700 from "../../public/assets/TH700 - 1.png";
// import imageTH800 from "../../public/assets/TH800 - 1.png";
// import imageTH900 from "../../public/assets/TH900 - 2.png";
// import imageTH1000 from "../../public/assets/TH1000 - 1.png";

export default function Home() {
  // const images = [
  //   imageTH100, imageTH300, imageTH310, imageTH700, 
  //   imageTH800, imageTH900, imageTH1000
  // ];
  return (
    <>
      {/* <Header /> */}
      {/* <Feature
        title="Conheça as lavadoras Thiele"
        description={`
          Tecnologia moderna para limpeza eficiente e sustentável. 
          Mais autonomia, praticidade e potência no seu trabalho.`}
        features={featureMachineText}
        media={<CarouselSwiper images={images}/>}
        textButton="Solicite um orçamento"
        link="http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
        barraDePesquisa={true}
      />
      <Feature
        title="Transforme sua máquina de chumbo ácido em lítio 🔋"
        description={`
          Experimente o Futuro da sua Operação com a Conversão para Lítio.
          Revolucione seus resultados com a tecnologia que está transformando o mercado.
        `}
        media={
          <Image src={imageChumbo} width={500} height={500} alt="Lavadora" />
        }
        textButton="Adquira seu kit agora"
        link="kit-transformador"
        barraDePesquisa={false} */}
      {/* /> */}
      {/* <Feature
        title="Peças de Reposição"
        description={`
          Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.  
        `}
        media={
          <Image src={imageReposicao} width={400} height={40} alt="Reposição" />
        }
        textButton="Confira as peças disponíveis"
        link="pecas-de-reposicao"
        barraDePesquisa={false}
      /> */}
      {/* <Feedback />
      <Footer /> */}
    </>
  );
}
