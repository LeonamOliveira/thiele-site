// React and Next.js imports
import Link from "next/link";
// import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

import { Coins } from "lucide-react";
import { JSX } from "react";

// Third-party library imports
import Balancer from "react-wrap-balancer";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  learnMore?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH100",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH300/310",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH700",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH800",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
];

const featureMachineText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH700",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH8000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH1200",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH2000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH2000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH2000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH2000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "TH2000",
    href: "/",
    description:
      "xxxxxxxxxxxxxxxxxxxxx",
    cta: "Solicite um orçamento",
    learnMore: "Saiba Mais"
  },
];

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
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          {/* <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          /> */}
        </div>
      </Container>
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

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(
              ({ icon, title, description, href, cta, learnMore }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                  style={{ backgroundColor: "#2B418D" }}
                >
                  <div className="grid gap-4"  style={{ backgroundColor: "#2B418D" }}>
                    <h4 className="text-xl text-primary" style={{ color: "#FFFFFF" }}>{title}</h4>
                    <p className="text-base opacity-75" style={{ color: "#FFFFFF" }}>{description}</p>
                  </div>
                  <div className="grid gap-4">
                    {icon}
                  </div>
                  <div className="grid gap-4"  style={{ backgroundColor: "#2B418D" }}>
                    {cta && (
                      <div className="flex h-fit items-center text-sm font-semibold rounded-md justify-center"
                      style={{
                        backgroundColor: "#FFFFFF",
                        width: 190,
                        height: 75,
                        gap: 10,
                        borderRadius: 60,
                        paddingLeft: 1,
                        paddingRight: 1,
                        paddingTop: 24,
                        paddingBottom: 24,
                      }}
                      >
                        <p style={{color:"#2B418D"}}>{cta}</p>
                      </div>
                    )}
                    {learnMore && (
                      <div className="flex h-fit items-center text-sm font-semibold rounded-md justify-center">
                        <p style={{color:"#FFFFFF"}}>{learnMore}</p>
                      </div>
                    )}
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
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
          {/* <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          /> */}
          </div>
      </Container>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureMachineText.map(
              ({ icon, title, description, href, cta, learnMore }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                  style={{ backgroundColor: "#2B418D" }}
                >
                  <div className="grid gap-4"  style={{ backgroundColor: "#2B418D" }}>
                    <h4 className="text-xl text-primary" style={{ color: "#FFFFFF" }}>{title}</h4>
                    <p className="text-base opacity-75" style={{ color: "#FFFFFF" }}>{description}</p>
                  </div>
                  <div className="grid gap-4">
                    {icon}
                  </div>
                  <div className="grid gap-4"  style={{ backgroundColor: "#2B418D" }}>
                    {cta && (
                      <div className="flex h-fit items-center text-sm font-semibold rounded-md justify-center"
                      style={{
                        backgroundColor: "#FFFFFF",
                        width: 190,
                        height: 75,
                        gap: 10,
                        borderRadius: 60,
                        paddingLeft: 1,
                        paddingRight: 1,
                        paddingTop: 24,
                        paddingBottom: 24,
                      }}
                      >
                        <p style={{color:"#2B418D"}}>{cta}</p>
                      </div>
                    )}
                    {learnMore && (
                      <div className="flex h-fit items-center text-sm font-semibold rounded-md justify-center">
                        <p style={{color:"#FFFFFF"}}>{learnMore}</p>
                      </div>
                    )}
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
      <Container className="border-b grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h1 className="!my-0" style={{ fontWeight: 300, fontSize: '40px', lineHeight: '62px', letterSpacing: '0%' }}>
              Peças de Reposição
          </h1>
          <p className="font-light leading-[1.4] opacity-70">
            Lorem ipsum dolor sit amet consectetur. Quis et in ipsum ultrices imperdiet egestas. Dictum vitae phasellus egestas consectetur. Dictum quisque urna nam imperdiet mattis. Tortor dolor blandit nibh leo aliquam quisque pellentesque.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild style={{ backgroundColor: '#2B418D' }}>
              <Link href="#">Confira as peças disponíveis</Link>
            </Button> 
          </div>
        </div>
          <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          {/* <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          /> */}
          </div>
      </Container>
      <Container className="grid items-stretch" style={{ backgroundColor: '#2B418D' }}>
      <h3 
        className="!mt-0" 
        style={{
          backgroundColor: '#FFFFFF', 
          color: '#2B418D',
          width: 115,
          height: 32,
          gap: '10px', // Note que 'gap' precisa de unidades (px, rem, etc.) se você quiser usar flexbox. Se não usar flexbox, remova esta linha.
          paddingTop: '6px',
          paddingRight: '8px',
          paddingBottom: '6px',
          paddingLeft: '8px',
          borderRadius: '16px', // Shorthand para todas as bordas
          // Se quiser controlar bordas individualmente, use:
          // borderTopLeftRadius: '16px',
          // borderTopRightRadius: '16px',
          // borderBottomLeftRadius: '16px',
          // ... outras bordas
          display: 'flex', // Se você quiser usar 'gap', precisa usar flexbox
          alignItems: 'center', // Para centralizar verticalmente o texto
          justifyContent: 'center', // Para centralizar horizontalmente o texto
        }}
      >
        Informações
      </h3>
        <p className="text-muted-foreground" style={{color: '#FFFFFF'}}>
          <Balancer >
          Lorem ipsum dolor sit amet consectetur. Quis et in ipsum ultrices imperdiet egestas. Dictum vitae phasellus egestas consectetur. Dictum quisque urna nam imperdiet mattis. Tortor dolor blandit nibh leo aliquam quisque pellentesqueLorem ipsum dolor sit amet consectetur. Quis et in ipsum ultrices imperdiet egestas. Dictum vitae phasellus egestas consectetur. Dictum quisque urna nam imperdiet mattis. Tortor dolor blandit nibh leo aliquam quisque pellentesque.Lorem ipsum dolor sit amet consectetur. Quis et in ipsum ultrices imperdiet egestas. Dictum vitae phasellus egestas consectetur. Dictum quisque urna nam imperdiet mattis. Tortor dolor blandit nibh leo aliquam quisque pellentesque.Lorem ipsum dolor sit amet consectetur. Quis et in ipsum ultrices imperdiet egestas. Dictum vitae phasellus egestas consectetur. Dictum quisque urna nam imperdiet mattis. Tortor dolor blandit nibh leo aliquam quisque pellentesque.Lorem ipsum dolor sit amet consectetur. Quis et in ipsum ultrices imperdiet egestas. Dictum vitae phasellus egestas consectetur. Dictum quisque urna nam imperdiet mattis. Tortor dolor blandit nibh leo aliquam quisque pellentesque.Lorem ipsum dolor sit amet consectetur.
          </Balancer>
        </p>
        <div className="not-prose"> {/* Centraliza o botão */}
          <Button
            className="w-fit"
            asChild
            style={{
              backgroundColor: '#FFFFFF',
              width: 200,
              height: 50,
              borderRadius: 36,
              gap: 10,
              paddingTop: 24,
              paddingRight: 56,
              paddingBottom: 24,
              paddingLeft: 56,
              display: 'flex', // Garante que o conteúdo fique flexível
              alignItems: 'center', // Alinha verticalmente
              justifyContent: 'center', // Alinha horizontalmente
            }}
          >
            <Link href="#" style={{ color: 'blue', textDecoration: 'none' }}> {/* Cor do texto e remove sublinhado */}
              <span style={{ // Aplica estilos ao texto dentro do Link
                fontFamily: 'Inter',
                fontWeight: 250,
                fontSize: 12,
                lineHeight: '28px',
                letterSpacing: '0%',
              }}>
                  Solicite um orçamento
              </span>
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;