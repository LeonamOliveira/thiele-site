"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Container, Section } from "./craft";

const testimonials = [
  {
    id: "testimonial-1",
    text: "A parceria com a Thiele nos ajuda a manter o Shopping São Jose sempre limpo e bem cuidado. Com equipamento de qualidade, suporte eficiente e um atendimento sempre rápido, contamos com eles para oferecer um ambiente agradável para nossos clientes todos os dias!",
    name: "Shopping São José",
  },
  {
    id: "testimonial-2",
    text: "É um grande prazer para nós falar sobre a parceria com a Thiele, uma empresa que se destaca pela excelência no aluguel de máquinas e equipamentos. Ao longo de nossa parceria, sempre contamos com um atendimento ágil, soluções eficientes e equipamentos de alta qualidade, o que tem sido essencial para nossas operações. A Thiele demonstra profissionalismo e comprometimento em cada entrega, garantindo não apenas a melhor infraestrutura, mas também um suporte técnico diferenciado. É uma parceria de grande valor para nós, e temos orgulho em recomendar seus serviços.",
    name: "Inove Terceirização",
  }
];


export function Feedback() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      if (!api) {
        return;
      }
  
      const updateCurrent = () => {
        setCurrent(api.selectedScrollSnap());
      };
  
      api.on("select", updateCurrent);
      return () => {
        api.off("select", updateCurrent);
      };
    }, [api]);
  
    return (
        <Section className="w-full">
            <Container>
                <div className="flex flex-col gap-3 py-2">
                    <h1 className="font-light text-[3.5rem] leading-[3.875rem] text-[#6C6C6C] text-center">
                        O que dizem nossos clientes
                    </h1>
                </div>
                <Carousel setApi={setApi}>
                <CarouselContent>
                    {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                        <div className="container flex flex-col items-center text-center">
                        <p className="mb-8 max-w-4xl font-medium md:px-8 lg:text-xl" style={{color: '#6C6C6C'}}>
                            &ldquo;{testimonial.text}&rdquo;
                        </p>
                        <p className="mb-1 text-sm font-medium md:text-lg text-[#6C6C6C]">
                            {testimonial.name}
                        </p>
                        <div className="mt-2 flex items-center gap-0.5">
                            <Star className="size-5 fill-yellow-500 stroke-none" />
                            <Star className="size-5 fill-yellow-500 stroke-none" />
                            <Star className="size-5 fill-yellow-500 stroke-none" />
                            <Star className="size-5 fill-yellow-500 stroke-none" />
                            <Star className="size-5 fill-yellow-500 stroke-none" />
                        </div>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
                <div className="container flex justify-center py-16">
                {testimonials.map((testimonial, index) => (
                    <Button
                    key={testimonial.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                        api?.scrollTo(index);
                    }}
                    >
                    <div
                        className={`size-2.5 rounded-full ${index === current ? 'bg-primary' : 'bg-input'}`}/>
                    </Button>
                ))}
                </div>
           </Container>
        </Section>
    );
}