import { FeatureText } from "./interfaces/feature-text.interface";

import imageTH1000 from "../../../public/assets/TH1000 - 1.png";
import imageTH1200 from "../../../public/assets/TH1200 - 1.png";
import imageTH2000 from "../../../public/assets/TH2000 - 1.png";

export const featureRepositionText: FeatureText[] = [
  {
    id: "10",
    title: "RODO",
    href: "/",
    description:
      "Máxima performance em limpeza profissional.",
    cta: "Solicite um orçamento",
    image: imageTH1000.src,
    capacity: "Tanques de 155 | 170 litros",
    productivity: "Produtividade de 4500 m²/h",
    battery: "Autonomia de 3 à 4 horas",
  },
  {
    id: "11",
    title: "MANGUEIRA",
    href: "/",
    description: "Mangueira Industrial de Alta Pressão para Lavadoras de Piso Thiele.",
    cta: "Solicite um orçamento",
    image: imageTH1200.src,
    capacity: "Tanques de 245 | 266 litros",
    productivity: "Produtividade de 6000 m²/h",
    battery: "Autonomia de 6 à 8 horas",
  },
  {
    id: "12",
    title: "BORRACHA",
    href: "/",
    description: "Borracha de Reposição de Alta Durabilidade para Lavadoras Thiele.",
    cta: "Solicite um orçamento",
    image: imageTH2000.src,
    capacity: "Tanques de 390 | 400 litros",
    productivity: "Produtividade de 8000 m²/h",
    battery: "Autonomia de 6 à 8 horas",
  },
];
