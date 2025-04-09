import { FeatureText } from "./interfaces/feature-text.interface";

import imageTH100 from "../../../public/assets/TH100 - 1.png";
import imageTH300 from "../../../public/assets/TH300.png";
import imageTH310 from "../../../public/assets/TH310.png";
import imageTH700 from "../../../public/assets/TH700 - 1.png";
import imageTH800 from "../../../public/assets/TH800 - 1.png";
import imageTH900 from "../../../public/assets/TH900 - 2.png";
import imageTH1000 from "../../../public/assets/TH1000 - 1.png";
// import imageTH1200 from "../../../public/assets/TH1200 - 1.png";
// import imageTH2000 from "../../../public/assets/TH2000 - 1.png";
import imageExtratora from "../../../public/assets/extratora.png";
import imagePolidora from "../../../public/assets/polidora.png";

export const featureMachineText: FeatureText[] = [
  {
    id: "1",
    title: "TH100",
    href: "/",
    description:
      "A limpadora TH 100 está disponível em duas configurações, que se adaptam perfeitamente às necessidades do seu negócio.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH100",
    learnMore: "Saiba Mais",
    image: imageTH100.src,
    capacity: "Tanques de 3.5/4.5L",
    productivity: "Produtividade de 1000 m²/h",
    battery: "Autonomia de 1.5 horas",
    specifications: [
      "Tanques de Solução/Recuperação de 3.5/4.5 L",
      "Largura de Limpeza: 430 mm",
      "Velocidade da Escova de Disco (RPM): 0-350",
      "Produtividade: 1000 m²/h",
      "Autonomia: 1.5 horas",
      "Bateria de Lítio: 36V 12Ah",
      "Peso Total: 18.5 kg"
    ]
  },
  {
    id: "2",
    title: "TH300",
    href: "/",
    description:
      "Limpeza profissional para grandes áreas. Alta produtividade (2500 m²/h) e autonomia de 4-5 horas. Ideal para empresas que buscam eficiência.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH300",
    learnMore: "Saiba Mais",
    image: imageTH300.src,
    capacity: "Tanque de 60L",
    productivity: "Produtividade de 2000m²/h",
    battery: "Autonima de 4 à 5 horas",
    specifications: [
      "Tanques de Solução/Recuperação: 95/107L", 
      "Largura de Limpeza: 1000 mm",
      "Velocidade da Escova de Disco (RPM): 180 ",
      "Produtividade: 3000 m²/h",
      "Autonomia: 4-5 horas",
      "Bateria de Lítio: 24V 200Ah",
      "Peso Total: 154 kg",
    ]
  },
  {
    id: "3",
    title: "TH310",
    href: "/",
    description:
      "Limpeza eficiente e sem esforço! Lavadora tracionada com alta produtividade (2500 m²/h) e autonomia de 4-5 horas. Ideal para grandes áreas.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH310",
    learnMore: "Saiba Mais",
    image: imageTH310.src,
    capacity: "Tanque de 55L",
    productivity: "Produtividade de 3000m²/h",
    battery: "Autonomia de 4 à 5 horas",
    specifications: [
      "Tanques de Solução/Recuperação: 55/60 L",
      "Largura de Limpeza: 530 mm",
      "Velocidade da Escova de Disco (RPM): 180",
      "Produtividade: 2500 m²/h",
      "Autonomia: 4-5 horas",
      "Bateria de Lítio: 24V 100Ah",
      "Peso Total: 154 kg"
    ]
  },
  {
    id: "4",
    title: "TH700",
    href: "/",
    description:
      "A solução profissional para limpeza de grandes áreas. Alta produtividade (3000 m²/h) e tanques de 95L/107L para máxima eficiência e autonomia.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH700",
    learnMore: "Saiba Mais",
    image: imageTH700.src,
    capacity: "Tanque de 100 | 110 litros",
    productivity: "Produtividade de 3000 m²/h",
    battery: "Autonomia de 3 à 4 horas",
    specifications: [
      "Tanques de Solução/Recuperação: 95/107L",
      "Largura de Limpeza: 1000mm",
      "Velocidade da Escova de Disco (RPM): 180",
      "Produtividade: 3000 m²/h",
      "Autonomia: 4-5 horas",
      "Bateria de Lítio: 24V 200Ah",
      "Peso Total: 154 kg"
    ]
  },
  {
    id: "5",
    title: "TH800",
    href: "/",
    description:
      "Limpeza profissional de alta performance.  Produtividade de 3300 m²/h, tanques de 85L/90L e tração potente para grandes áreas.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH800",
    learnMore: "Saiba Mais",
    image: imageTH800.src,
    capacity: "Tanques de 90 | 100 litros",
    productivity: "Produtividade de 3000 m²/h",
    battery: "Autonomia de 3 à 4 horas",
    specifications: [
      "Tanques de Solução/Recuperação: 85/90 L",
      "Largura de Limpeza: 900 mm",
      "Velocidade da Escova de Disco (RPM): 180",
      "Produtividade: 3300 m²/h",
      "Autonomia: 4-5 horas",
      "Bateria de Lítio: 24V 100A",
      "Peso Total: 258 kg"
    ]
  },
  {
    id: "6",
    title: "TH900",
    href: "/",
    description:
      "A força da limpeza profissional. Produtividade de 4500 m²/h, tanques de 115L/125L e tração potente para grandes áreas e alta pressão (4.15Mpa).",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH900",
    learnMore: "Saiba Mais",
    image: imageTH900.src,
    capacity: "Tanques de 120|130 litros",
    productivity: "Produtividade de 3500 m²/h",
    battery: "Autonomia de 3 à 4 horas",
    specifications: [
      "Tanques de Solução/Recuperação: 115/125 L",
      "Largura de Limpeza: 1020 mm",
      "Velocidade da Escova de Disco (RPM): 180",
      "Produtividade: 4500 m²/h",
      "Autonomia: 4-6 horas",
      "Bateria de Lítio: 24V 200A",
      "Peso Total: 332 kg"
    ]
  },
  {
    id: "7",
    title: "TH1000",
    href: "/",
    description:
      "Máxima performance em limpeza profissional. Produtividade de 4500 m²/h, tanques de 150L/165L e tração potente para grandes áreas e alta pressão.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH1000",
    learnMore: "Saiba Mais",
    image: imageTH1000.src,
    capacity: "Tanques de 155 | 170 litros",
    productivity: "Produtividade de 4500 m²/h",
    battery: "Autonomia de 3 à 4 horas",
    specifications: [
      "Tanques de Solução/Recuperação: 150/165 L",
      "Largura de Limpeza: 1200 mm",
      "Velocidade da Escova de Disco (RPM): 180",
      "Produtividade: 4500 m²/h",
      "Autonomia: 4-6 horas",
      "Bateria de Lítio: 24V 200Ah",
      "Peso Total: 435 kg"
    ]
  },
  // {
  //   id: "8",
  //   title: "TH1200",
  //   href: "/",
  //   description:
  //     "Limpeza de alta escala com a TH 12000.  Produtividade de 6000 m²/h, tanques de 245L/266L para resultados impecáveis em grandes espaços, alta performance e eficiente.",
  //   cta: "Solicite um orçamento",
  //   message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH1200",
  //   learnMore: "Saiba Mais",
  //   image: imageTH1200.src,
  //   capacity: "Tanques de 245 | 266 litros",
  //   productivity: "Produtividade de 6000 m²/h",
  //   battery: "Autonomia de 6 à 8 horas",
  //   specifications: [
  //     "Tanques de Solução/Recuperação: 245/266 L", 
  //     "Largura de Limpeza: 1380 mm",
  //     "Velocidade da Escova de Disco (RPM): 180",
  //     "Produtividade: 6000 m²/h",
  //     "Autonomia: 6-8 horas",
  //     "Bateria de Lítio: ",
  //     "Peso Total: 583 kg",
  //   ]
  // },
  // {
  //   id: "9",
  //   title: "TH2000",
  //   href: "/",
  //   description:
  //     "A solução profissional para limpeza de grandes áreas. Produtividade de8000 m²/h, tanques de 390L/400L para resultados impecáveis em grandes espaços.",
  //   cta: "Solicite um orçamento",
  //   message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH2000",
  //   learnMore: "Saiba Mais",
  //   image: imageTH2000.src,
  //   capacity: "Tanques de 390 | 400 litros",
  //   productivity: "Produtividade de 8000 m²/h",
  //   battery: "Autonomia de 6 à 8 horas",
  //   specifications: [
  //     "Tanques de Solução/Recuperação: 390/400 L",
  //     "Largura de Limpeza: 1380 mm",
  //     "Pressão da Escova de Disco (Mpa): 4.8", 
  //     "Produtividade: 7500 m²/h",
  //     "Autonomia: 4-6 horas",
  //     "Peso Total: 1164 kg"
  //   ]
  // },
  {
    id: "10",
    title: "Extratora",
    href: "/",
    description:
      "A Extratora de Cera oferece desempenho robusto e eficiência notável na remoção de cera, ideal para a manutenção eficaz de grandes áreas.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH2000",
    learnMore: "Saiba Mais",
    image: imageExtratora.src,
    capacity: "Motor: 15hp",
    productivity: "Consumo de Álcool: 1,9L/h",
    battery: "Elétrica, à bateria (12V)",
    specifications: [
      "Tanques de Solução/Recuperação: 390/400 L",
      "Largura de Limpeza: 1380 mm",
      "Pressão da Escova de Disco (Mpa): 4.8", 
      "Produtividade: 7500 m²/h",
      "Autonomia: 4-6 horas",
      "Peso Total: 1164 kg"
    ]
  },
  {
    id: "11",
    title: "Polidora",
    href: "/",
    description:
      "A Polidora a Combustão oferece alta performance e produtividade superior no polimento de grandes áreas. Eficiência devido a rotação x peso.",
    cta: "Solicite um orçamento",
    message: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20m%C3%A1quina%20TH2000",
    learnMore: "Saiba Mais",
    image: imagePolidora.src,
    capacity: "Motor: 16hp",
    productivity: "Consumo de Álcool: 1,9l/h",
    battery: "Autonomia de 6 à 8 horas",
    specifications: [
      "Motor: 15 HP",
      "Combustível: Etanol",
      "Disco Tynex: 685 mm", 
      "Velocidade do Motor: 3600 RPM / 350 RPM no disco",
      "Partida: Elétrica, à bateria (12 V)",
      "Chassi: Liga de alumínio fundida",
      "Nível de Ruído: 92 dB",
      "Consumo de Etanol: 1,9 L/hora"
    ]
  }
];
