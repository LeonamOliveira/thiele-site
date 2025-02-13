// React and Next.js imports
import Link from "next/link";
// import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

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
      <Container className="border-b grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h1 className="!my-0" style={{ fontWeight: 300, fontSize: '40px', lineHeight: '62px', letterSpacing: '0%' }}>
            Baterias de Lítio
          </h1>
          <p className="font-light leading-[1.4] opacity-70">
            Está na hora de transformar a sua rotina de limpeza! <br/>

            Consulte nossos modelos disponíveis e encontre a solução perfeita para suas necessidades.
          </p>
        </div>
      </Container>
      <Container className="border-b grid items-stretch md:grid-cols-2 md:gap-12">
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
    </Section>
  );
};

export default Feature;
