"use client";

import Image from "next/image";
import Link from "next/link";
import ImageLogo from "../../public/assets/thiele-icon.png";
import ImageMaquinas from "../../public/assets/Maquinas.jpg";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-background border-b border-border"
    >
      <div
        className="bg-[#D9D9D9] py-3 fixed top-0 left-0 w-full z-50"
        style={{ color: "#2B418D" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Link href="/" className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={ImageLogo}
                  width={500}
                  height={250}
                  alt="Logo da empresa Thiele"
                  priority
                  className="max-w-[200px] h-auto md:max-w-[200px]"
                />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right hover:scale-105 transition-transform duration-300 text-sm"
          >
            <strong>
              <a href="http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" className="whitespace-nowrap">
                Central de atendimento: (11) 93011-1440
              </a>
            </strong>
            <br/>
            <strong className="whitespace-nowrap">comercial@thiele.com.br</strong>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-8 mt-[60px]">
        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={ImageMaquinas}
              alt="Máquinas da empresa Thiele"
              fill
              priority
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#D9D9D9] py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6" 
          >
            {[
              "Entrega em todo o território nacional",
              "Central de Atendimento 24 horas",
              "Suporte especializado no território nacional",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className="relative group text-center md:text-left" 
              >
                <motion.p
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-medium leading-snug cursor-pointer"
                  style={{ color: "#2B418D" }}
                >
                  <strong>{text}</strong>
                </motion.p>
                <motion.div
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"
                  style={{ transform: "translateX(-50%)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Separator />
    </motion.header>
  );
}