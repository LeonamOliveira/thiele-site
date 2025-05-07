"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Truck, ShieldCheck, MessageSquareHeart, Menu, X } from "lucide-react"; // Ícones
import { useState, useEffect } from "react";

import ImageLogo from "../../public/assets/thiele-icon.webp";
import ImageMaquinas from "../../public/assets/Maquinas.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState(0);

  useEffect(() => {
    const topBarElement = document.getElementById("top-bar");
    if (topBarElement) {
      setTopBarHeight(topBarElement.offsetHeight);
    }
  }, []);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es", text: "(11) 93011-1440", icon: <Phone size={16} /> },
    { href: "mailto:comercial@thiele.com.br", text: "comercial@thiele.com.br", icon: <Mail size={16} /> },
  ];

  const benefits = [
    { text: "Entrega em todo o Brasil", icon: <Truck size={28} className="text-blue-600 dark:text-blue-400" /> },
    { text: "Atendimento Diferenciado", icon: <MessageSquareHeart size={28} className="text-blue-600 dark:text-blue-400" /> },
    { text: "Suporte Especializado", icon: <ShieldCheck size={28} className="text-blue-600 dark:text-blue-400" /> },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white dark:bg-slate-900 shadow-sm"
    >
      <div
        id="top-bar"
        className="bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 fixed top-0 left-0 w-full z-50 border-b border-slate-200 dark:border-slate-700"
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={ImageLogo}
                alt="Logo da empresa Thiele"
                priority
                className="h-8 w-auto xs:h-9 sm:h-10 md:h-11" 
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center gap-1.5 text-xs lg:text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md text-blue-700 dark:text-blue-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              whileTap={{ scale: 0.9 }}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-3"
          >
            <div className="container mx-auto px-4 flex flex-col gap-3">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href} passHref legacyBehavior>
                  <motion.a
                    onClick={() => setIsMenuOpen(false)} 
                    className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md px-2 transition-colors duration-150"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

      </div>

      <div style={{ paddingTop: `${topBarHeight}px` }} className="w-full bg-slate-50 dark:bg-slate-800">
        <div className="relative w-full h-[25vh] min-h-[180px] sm:h-[35vh] md:h-[45vh] lg:h-[350px] xl:h-[400px]"> {/* Alturas responsivas para o hero */}
          <Image
            src={ImageMaquinas}
            alt="Máquinas da empresa Thiele"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full bg-slate-100 dark:bg-slate-800 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                  {benefit.icon}
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Separator className="bg-slate-200 dark:border-slate-700" />
    </motion.header>
  );
}