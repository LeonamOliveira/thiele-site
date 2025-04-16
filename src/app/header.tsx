"use client";

import Image from "next/image";
import Link from "next/link";
import ImageLogo from "../../public/assets/thiele-icon.png";
import ImageMaquinas from "../../public/assets/Máqiuinas.png";
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
      <div className="bg-[#D9D9D9] py-2" style={{ color: "#2B418D", position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }} >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={ImageLogo}
                  width={500}
                  height={150}
                  alt="Logo da empresa Thiele"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right hover:scale-105 transition-transform duration-300"
          >
            <strong><a href="http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es">Central de atendimento: (11) 93011-1440</a></strong>
            <br />
            <strong>comercial@thiele.com.br</strong>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-6">
        <div className=" relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={ImageMaquinas}
              alt="Máquinas da empresa Thiele"
              fill
              priority
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#D9D9D9] py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
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
                className="relative group"
              >
                <motion.p
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.3 }}
                  className="text-lg md:text-xl font-medium text-center md:text-left leading-snug cursor-pointer"
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
