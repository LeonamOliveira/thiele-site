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
      <div className="bg-[#2B418D] text-white py-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-sm">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left hover:scale-105 transition-transform duration-300"
          >
            <strong>Central de atendimento: (11) 93011-1440</strong>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right hover:scale-105 transition-transform duration-300"
          >
            <strong>comercial@thiele.com.br</strong>
          </motion.p>
        </div>
      </div>

      <div className="w-full py-6">
        <div className="container mx-auto px-4 flex justify-center md:justify-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" passHref>
              <Image
                src={ImageLogo}
                width={250}
                height={150}
                alt="Logo da empresa Thiele"
                priority
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={ImageMaquinas}
              width={650}
              alt="Máquinas da empresa Thiele"
              priority
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#2B418D] py-6">
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
                  className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-snug cursor-pointer"
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


// export default function Header() {
//   return (
//     <header className="w-full bg-background border-b border-border">
//       <div className="bg-[#2B418D] text-white py-2">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-sm">
//           <p className="text-center md:text-left">
//             <strong>Central de atendimento: (11) 93011-1440</strong>
//           </p>
//           <p className="text-center md:text-right">
//             <strong>comercial@thiele.com.br</strong>
//           </p>
//         </div>
//       </div>

//       <div className="w-full py-6">
//         <div className="container mx-auto px-4 flex flex-col items-center md:items-start gap-6 md:gap-12">
//           <div className="flex justify-center md:justify-start w-full md:w-auto">
//             <Image
//               src={ImageLogo}
//               width={250}
//               height={150}
//               alt="Logo da empresa Thiele"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//       <div className="w-full py-6">
//         <div className="container mx-auto px-4 flex flex-col items-center md:items-center gap-6 md:gap-12">
//           <div className="flex justify-center md:justify-center w-full md:w-auto">
//             <Image
//               src={ImageMaquinas}
//               width={736}
//               alt="Logo da empresa Thiele"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//       <div className="w-full bg-[#2B418D]  py-6">
//         <div className="container mx-auto px-4 flex flex-col items-center md:items-start gap-6 md:gap-12">
//           <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-12">
//             <p className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-snug">
//               <strong>Entrega em todo o território nacional</strong>
//             </p>
//             <p className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-snug">
//               <strong>Central de Atendimento 24 horas</strong>
//             </p>
//             <p className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-snug">
//               <strong>Suporte especializado no território nacional</strong>
//             </p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
