// import Header from  "../footer";
import { featureRepositionText } from "@/components/feature/reposition-feature";
import Header from "../header";
import Footer from "../footer";
import Feature from "@/components/feature/feature";

export default function Home() {
  return (
    <div>
      <Header />
      <Feature
        title="Peças de Reposição"
        description={`
          Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.`}
        features={featureRepositionText}
      />
      <Footer />
    </div>
  );
}
