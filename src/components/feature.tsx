import Link from "next/link";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "./carousel";

import Balancer from "react-wrap-balancer";

import imageChumbo from '../../public/assets/chumbo.png';
import imageReposicao from '../../public/assets/reposicao.jpeg';
import imageTH100 from '../../public/assets/TH100 - 1.png';
import imageTH300 from '../../public/assets/TH300.png';
import imageTH310 from '../../public/assets/TH310.png';

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  learnMore?: string;
  image?: string | StaticImport;
  capacity?: string;
  productivity?: string;
  battery?: string;
};

const featureText: FeatureText[] = [
  {
    title: "TH100",
    href: "/",
    description:
      "A limpadora TH 100 está disponível em duas configurações, que se adaptam perfeitamente às necessidades do seu negócio.",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    image: imageTH100.src,
    capacity: 'Tanques de 3.5/4.5L',
    productivity: 'Produtividade de 1000 m²/h',
    battery: 'Autonomia de 1.5 horas'
  },
  {
    title: "TH300",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    image: imageTH300.src,
    capacity: 'Tanque de 60L',
    productivity: 'Produtividade de 2000m²/h',
    battery: 'Autonima de 4 à 5 horas'
  },
  {
    title: "TH310",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    image: imageTH310.src,
    capacity: 'Tanque de 55L',
    productivity: 'Produtividade de 3000m²/h',
    battery: 'Autonomia de 4 à 5 horas'
  },
  {
    title: "TH700",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    capacity: 'Tanque de 100 | 110 litros',
    productivity: 'Produtividade de 3000 m²/h',
    battery: 'Autonomia de 3 à 4 horas'
  },
  {
    title: "TH800",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    capacity: 'Tanques de 90 | 100 litros',
    productivity: 'Produtividade de 3000 m²/h',
    battery: 'Autonomia de 3 à 4 horas'
  },
  {
    title: "TH900",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    capacity: 'Tanques de 120|130 litros',
    productivity: 'Produtividade de 3500 m²/h',
    battery: 'Autonomia de 3 à 4 horas'
  },
  {
    title: "TH1000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    capacity: 'Tanques de 155 | 170 litros',
    productivity: 'Produtividade de 4500 m²/h',
    battery: 'Autonomia de 3 à 4 horas'
  },
  {
    title: "TH1200",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    capacity: 'Tanques de 245 | 266 litros',
    productivity: 'Produtividade de 6000 m²/h',
    battery: 'Autonomia de 6 à 8 horas'
  },
  {
    title: "TH2000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    capacity: 'Tanques de 390 | 400 litros',
    productivity: 'Produtividade de 8000 m²/h',
    battery: 'Autonomia de 6 à 8 horas'
  },
];

const renderFeatureItem = (feature: FeatureText) => (
  <Dialog key={feature.title}>
    <DialogTrigger asChild>
      <div className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
        style={{ backgroundColor: "#2B418D" }}>
        <div className="grid gap-4"  style={{ backgroundColor: "#2B418D" }}>
          <h4 className="text-xl text-primary" style={{ color: "#FFFFFF" }}><strong>{feature.title}</strong></h4>
          <p className="text-base opacity-75" style={{ color: "#FFFFFF" }}>{feature.description}</p>
          {feature.image && (
            <div className="grid gap-4">
              <Image
              src={feature.image}
              width={500}
              alt={'Imagem'}
              height={300}>
              </Image>
            </div>
          )}
        </div>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
      <DialogTitle>{feature.title}</DialogTitle>
      <DialogDescription>{feature.description}</DialogDescription>
      <div className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
      style={{ backgroundColor: "##F2F2F2" }}>
        {feature.image && (
          <Image
          src={feature.image}
          width={500}
          alt={'Imagem'}
          height={300}>
          </Image>
        )}
        {feature.capacity && <><p className="font-bold my-0 leading-3">Capacidade</p>
        <p className="text-gray-600 my-0 leading-3">{feature.capacity}</p></>}
        {feature.productivity && <><p className="font-bold leading-3">Produtividade</p>
        <p className="text-gray-600 leading-3">{feature.productivity}</p></>}
        {feature.battery && <><p className="font-bold leading-3">Bateria </p>
        <p className="text-gray-600 leading-3">{feature.battery}</p></>}
        {feature.cta && (
          <div className="grid gap-4 bg-[#2B418D]">
            <Button className="rounded-md bg-[#2B418D]">{feature.cta}</Button>
          </div>
          )}
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)

const Feature = () => {
  return (
    <Section className="w-full ">
      <Container className="border-b grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h1 className="!my-0" style={{ fontWeight: 300, fontSize: '56px', lineHeight: '62px', letterSpacing: '0%' }}>
              Conheça as LavadorasThiele
          </h1>
          <p className="font-light leading-[1.4] opacity-70">
            Chegaram as novas lavadoras a bateria de lítio!
          </p>
          <p className="font-light leading-[1.4] opacity-70">
            Tecnologia moderna, sem cabos ou combustão, para limpeza eficiente e sustentável. 
          </p>
          <p className="font-light leading-[1.4] opacity-70">
            Mais autonomia, praticidade e potência no seu trabalho.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild style={{ backgroundColor: '#2B418D' }}>
              <Link href="#">Solicite um Orçamento</Link>
            </Button> 
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg w-full">
          <CarouselDemo />
        </div>
      </Container>
      <div className="w-full h-[50px] bg-blue-900 px-4 md:px-8 mt-[-20px] w-100">
      </div>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Bateria de Lítio
            </Balancer>
          </h3>
          <p className="font-light leading-[1.4] opacity-70">
            <Balancer>
              Está na hora de transformar a sua rotina de limpeza! <br />

              Consulte nossos modelos disponíveis e encontre a solução perfeita para suas necessidades.
            </Balancer>
          </p>

          <div className="mt-12 grid gap-12 md:mt-4 md:grid-cols-3">
            {featureText.map(renderFeatureItem)}
          </div>
        </div>
      </Container>
      <Container className="border-b border-t grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h1 className="!my-0" style={{ fontWeight: 300, fontSize: '40px', lineHeight: '62px', letterSpacing: '0%' }}>
              Transforme sua máquina de chumbo ácido em lítio
          </h1>
          <p className="font-light leading-[1.4] opacity-70">
            Revolucione seus resultados com a tecnologia que está transformando o mercado.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild style={{ backgroundColor: '#2B418D' }}>
              <Link href="#">Adquira seu kit agora</Link>
            </Button> 
          </div>
        </div>
          <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={imageChumbo}
            alt="placeholder"
            className="fill object-cover"
            width={550}
          />
          </div>
      </Container>
      <Container className="border-b grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h1 className="!my-0" style={{ fontWeight: 300, fontSize: '40px', lineHeight: '62px', letterSpacing: '0%' }}>
            Peças de Reposição
          </h1>
          <p className="font-light leading-[1.4] opacity-70">
            Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.            <br /> 
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild style={{ backgroundColor: '#2B418D' }}>
              <Link href="#">Confira as peças disponíveis</Link>
            </Button> 
          </div>
        </div>
          <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={imageReposicao}
            alt="placeholder"
            className="fill object-cover"
          />
          </div>
      </Container>
    </Section>
  );
};

export default Feature;