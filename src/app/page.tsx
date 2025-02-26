import Header from "./header";
import Machines from "./machines";
import Footer from "./footer";
import Feature from "../components/feature/feature";
import { featureMachineText } from "@/components/feature/machines-features";
import { CarouselDemo } from "@/components/carousel";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Machines />
      <Feature
        title="Conheça as lavadoras Thiele"
        description={`
          Chegaram as novas lavadoras a bateria de lítio!
          Tecnologia moderna, sem cabos ou combustão, para limpeza eficiente e sustentável.
          Mais autonomia, praticidade e potência no seu trabalho.`}
        features={featureMachineText} 
        media={<CarouselDemo />}/>
      <Footer />
    </div>
  );
}
