"use client";

import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Section, Container } from "./craft";

const testimonialsData = [
  {
    id: "testimonial-2",
    text: "É um grande prazer para nós falar sobre a parceria com a Thiele, uma empresa que se destaca pela excelência no aluguel de máquinas e equipamentos. Ao longo de nossa parceria, sempre contamos com um atendimento ágil, soluções eficientes e equipamentos de alta qualidade, o que tem sido essencial para nossas operações. A Thiele demonstra profissionalismo e comprometimento em cada entrega, garantindo não apenas a melhor infraestrutura, mas também um suporte técnico diferenciado. É uma parceria de grande valor para nós, e temos orgulho em recomendar seus serviços.",
    name: "Inove Terceirização",
    rating: 5,
  },
  {
    id: "testimonial-1",
    text: "A parceria com a Thiele nos ajuda a manter o Shopping São Jose sempre limpo e bem cuidado. Com equipamento de qualidade, suporte eficiente e um atendimento sempre rápido, contamos com eles para oferecer um ambiente agradável para nossos clientes todos os dias!",
    name: "Shopping São José",
    rating: 5,
  }
];

const RatingStars = ({ rating, starSize = "h-5 w-5" }: { rating: number; starSize?: string }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`${starSize} ${
            index < rating
              ? "fill-yellow-400 dark:fill-yellow-500 text-yellow-400 dark:text-yellow-500"
              : "fill-slate-200 dark:fill-slate-600 text-slate-300 dark:text-slate-500"
          } stroke-none`}
        />
      ))}
    </div>
  );
};

export function Feedback() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Section className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={titleVariants}
            className="text-3xl font-semibold tracking-tight text-center text-slate-800 dark:text-slate-100 sm:text-4xl lg:text-5xl mb-12 md:mb-16"
          >
            O que nossos clientes dizem
          </motion.h2>

          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
            <CarouselContent className="-ml-4 py-2">
              {testimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-full">
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white dark:bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 flex flex-col min-h-[280px] sm:min-h-[260px] justify-between transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="flex-grow">
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-100 dark:text-blue-800 mb-3 sm:mb-4 transform -scale-x-100" />
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {testimonial.name}
                      </p>
                      <RatingStars rating={testimonial.rating} starSize="h-4 w-4 sm:h-5 sm:w-5 mt-1.5" />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center items-center gap-2 pt-10 md:pt-12">
            {testimonialsData.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                aria-label={`Ver depoimento ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={`rounded-full h-9 w-9 p-0 transition-opacity duration-300 ${
                  index === current ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <motion.div
                  className="size-2.5 rounded-full"
                  animate={{
                    backgroundColor: index === current
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted-foreground) / 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}