// React and Next.js imports
import * as React from "react";

import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import TH310 from "../../public/assets/TH310.png";
import TH100 from "../../public/assets/TH100 - 1.png";
import TH1001 from "../../public/assets/TH100 - 2.png";
import TH700 from "../../public/assets/TH700 - 1.png";
// import TH7001 from "../../public/assets/TH700 -2.png";
// import Maquinas from "../../public/assets/Máqiuinas.png";

// const photos = [
//     {   
//       src: Maquinas,
//     },
//     {
//       src: TH310,
//     },
//     {
//       src: TH100,
//     },
//     {
//       src: TH1001,
//     },
//     {
//       src: TH700,
//     },
//     {
//       src: TH7001,
//     }
//   ];
  

const Machines = () => {
  return (
    <>
    
        <Section>
        <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-6 py-8">
            <h1 className="!my-0"><strong>Conheça as <br/> LavadorasThiele</strong></h1>
            <p className="font-light leading-[1.4] opacity-70">
                Chegaram as novas lavadoras a bateria de lítio!
            </p>
            <p className="font-light leading-[1.4] opacity-70">
                Tecnologia moderna, sem cabos ou combustão, para limpeza eficiente e sustentável. <br/>
                Mais autonomia, praticidade e potência no seu trabalho.
            </p>
            <div className="not-prose flex items-center gap-2">
                <Button className="w-fit" asChild style={{backgroundColor: 'rgb(43, 65, 141)'}}>
                <Link href="#">Solicite um orçamento</Link>
                </Button>
            </div>
            </div>
            <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
            <Image
                src={TH310}
                alt="placeholder"
                className="fill object-cover"
                height={200}
                width={450}
            />
            <Image
                src={TH100}
                alt="placeholder"
                className="fill object-cover"
                height={200}
                width={200}
            />
            </div>
        </Container>
        </Section>
    </>
  );
};

export default Machines;
