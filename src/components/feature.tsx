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
    capacity: 'Tanques de 4.5 | 3.5 litros',
    productivity: 'Produtividade de 1000 M2/H',
    battery: 'Autonomia de 2 horas'
  },
  {
    title: "TH300",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    image: imageTH300.src
  },
  {
    title: "TH310",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais",
    image: imageTH310.src
  },
  {
    title: "TH700",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    title: "TH800",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    title: "TH900",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    title: "TH1000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    title: "TH1200",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    title: "TH2000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
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
    <Section>
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
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border w-full">
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
            Lorem ipsum dolor sit amet consectetur. Quis et in ipsum ultrices imperdiet egestas. Dictum vitae phasellus egestas consectetur. Dictum quisque urna nam imperdiet mattis. Tortor dolor blandit nibh leo aliquam quisque pellentesque.
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
            Assegure o desempenho impecável da sua lavadora de pisos com nossas peças de reposição de alta qualidade.
            <br /> 
            Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.
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