// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import ImageProfile from "../../public/assets/image.png";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[2.5fr_3.5fr_2.5fr]">
          <div className="flex flex-col gap-2">
            <h5><strong>Institucional</strong></h5>
            <Link href="/">Quem Somos</Link>
            <Link href="/">Assistência Técnica</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5><strong>Indústrias Thiele</strong></h5>
            <p>
              Estr. Estadual Boituva - Tatuí <br/>
              (Sp-129), 6118 - AP, <br/> 
              Boituva - SP <br/> 
              18550-000 <br/>
              Horário de atendimento: das 8h às 18h
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5><strong>Central de Atendimento</strong></h5>
            <p>
              Televendas <br/>
              (11)93011-1440 <br/>
              E-mail <br/>
              comercial@thiele.com.br
            </p>
          </div>
          <div className="grid gap-4">
            <p className="text-muted-foreground">
              ©{" "}
              <a href="#">GOAS CONSULTORIA. <br/></a>
              Todos os direitos reservados. <br/>2025-presente.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
