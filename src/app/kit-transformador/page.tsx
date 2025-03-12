// import Header from  "../footer";
import Header from "../header";
import Footer from "../footer";
import Feature from "@/components/feature/feature";

export default function Home() {
  return (
    <div>
      <Header />
      <Feature
        title="Kit Transformador"
        description={`
          Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.`}
        textButton={`Solicite um Orçamento`}
      />
      <Footer />
    </div>
  );
}
