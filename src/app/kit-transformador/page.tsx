"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Footer from "../footer";
import Header from "../header";
import CarouselSwiper from "@/components/carousel-swiper";
import bateria1 from '../../../public/assets/bateria/bateria1.jpg';
import bateria3 from '../../../public/assets/bateria/bateria3.jpg';
import bateria4 from '../../../public/assets/bateria/bateria4.jpg';
import bateria5 from '../../../public/assets/bateria/bateria5.jpg';
import bateria6 from '../../../public/assets/bateria/bateria6.jpg';
import bateria7 from '../../../public/assets/bateria/bateria7.jpg';

export default function Home() {
  const images = [bateria1, bateria3, bateria4, bateria5, bateria6, bateria7];
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 py-16 text-center px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900" style={{color: "#6C6C6C"}}>
          Kit Bateria de Lítio Thiele
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto" style={{color: "#6C6C6C"}}>
          Autonomia Estendida para Limpeza Industrial. Máxima produtividade e eficiência com baterias de alta performance.
        </p>
        <Separator className="my-6" />

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button className="w-fit"
                asChild
                style={{ backgroundColor: "#B32C39" }}>
            <a href="http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Kit%20Transformador.">
              Solicite um Orçamento
            </a>
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-12 px-4 md:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{color: "#6C6C6C"}}>
            Benefícios do Kit de Bateria de Lítio
          </h2>
          <p className="mt-4" style={{color: "#6C6C6C"}}>
            Projetado para elevar a performance de suas máquinas, garantindo mais tempo de operação e menor custo de manutenção.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "Autonomia Estendida",
              desc: "Maior tempo de operação contínua para máxima produtividade.",
            },
            {
              title: "Desempenho Otimizado",
              desc: "Potência constante e eficiente para resultados impecáveis com nossos produtos.",
            },
            {
              title: "Durabilidade Excepcional",
              desc: "Ciclo de vida prolongado para maior retorno sobre o investimento.",
            },
            {
              title: "Compatibilidade Garantida",
              desc: "Projetado para integração perfeita com limpadoras e polidoras Thiele.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, filter: "brightness(1.05)" }}
              className="transition-all duration-300"
            >
              <Card className="shadow-md">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium" style={{color: "#6C6C6C"}}>{feature.title}</h3>
                  <p className="text-sm mt-2" style={{color: "#6C6C6C"}}>{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.section>

      <CarouselSwiper images={images} />

      <Separator className="my-6" />

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-gray-50 text-center"
      >
        <h2 className="text-2xl font-semibold" style={{color: "#6C6C6C"}}>
          Maximize o Potencial das Suas Máquinas Thiele
        </h2>
        <p className="max-w-2xl mx-auto mt-4" style={{color: "#6C6C6C"}}>
          Invista no Kit de Bateria de Lítio Thiele e experimente mais autonomia, desempenho e durabilidade. 
          Entre em contato e descubra como podemos ajudar!
        </p>
        <Separator className="my-6" />
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button className="w-fit"
                asChild
                style={{ backgroundColor: "#B32C39" }}>
            <a href="http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Kit%20Transformador.">
              Fale Conosco Agora
            </a>
          </Button>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}