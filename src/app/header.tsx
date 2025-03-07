import Image from "next/image";
import ImageLogo from "../../public/assets/thiele-icon.png";
import ImageMaquinas from "../../public/assets/Máqiuinas.png";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="bg-[#2B418D] text-white py-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-sm">
          <p className="text-center md:text-left">
            <strong>Central de atendimento: (11) 93011-1440</strong>
          </p>
          <p className="text-center md:text-right">
            <strong>comercial@thiele.com.br</strong>
          </p>
        </div>
      </div>

      <div className="w-full py-6">
        <div className="container mx-auto px-4 flex flex-col items-center md:items-start gap-6 md:gap-12">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src={ImageLogo}
              width={250}
              height={150}
              alt="Logo da empresa Thiele"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full py-6">
        <div className="container mx-auto px-4 flex flex-col items-center md:items-center gap-6 md:gap-12">
          <div className="flex justify-center md:justify-center w-full md:w-auto">
            <Image
              src={ImageMaquinas}
              width={736}
              alt="Logo da empresa Thiele"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2B418D]  py-6">
        <div className="container mx-auto px-4 flex flex-col items-center md:items-start gap-6 md:gap-12">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-12">
            <p className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-snug">
              <strong>Entrega em todo o território nacional</strong>
            </p>
            <p className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-snug">
              <strong>Central de Atendimento 24 horas</strong>
            </p>
            <p className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-snug">
              <strong>Suporte especializado no território nacional</strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
