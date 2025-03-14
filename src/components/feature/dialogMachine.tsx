import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { FeatureText } from "./interfaces/feature-text.interface";

interface FeatureDialogProps {
  feature: FeatureText;
}


const FeatureDialog: React.FC<FeatureDialogProps> = ({ feature }) => {
  feature.specifications = [
    "Tanques de Solução/Recuperação de 3.5/4.5 L",
    "Largura de Limpeza: 430 mm",
    "Velocidade da Escova de Disco (RPM): 0-350",
    "Produtividade: 1000 m²/h",
    "Autonomia: 1.5 horas",
    "Bateria de Lítio: 36V 12Ah",
    "Peso Total: 18.5 kg"
  ];
  
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col justify-between gap-4 rounded-xl border p-5 md:p-6 shadow-lg bg-gradient-to-r from-[#2B418D] to-[#1E306E] text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Título e descrição da Feature */}
          <div className="grid gap-2 text-left">
            <h4 className="text-xl font-semibold">{feature.title}</h4>
            <p className="text-sm opacity-80">{feature.description}</p>

            {/* Imagem da Feature */}
            {feature.image && (
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105">
                <Image src={feature.image} width={500} height={250} alt="Imagem" className="w-full h-[180px] object-cover" />
              </div>
            )}

            {/* Informações Extras */}
            {(feature.capacity || feature.productivity || feature.battery) && (
              <div className="bg-white p-3 rounded-lg text-gray-800 space-y-2 w-full shadow-md border border-gray-200 mt-3">
                {feature.capacity && (
                  <div>
                    <p className="font-semibold text-sm text-gray-700">Capacidade</p>
                    <p className="text-gray-600 text-xs">{feature.capacity}</p>
                  </div>
                )}
                {feature.productivity && (
                  <div>
                    <p className="font-semibold text-sm text-gray-700">Produtividade</p>
                    <p className="text-gray-600 text-xs">{feature.productivity}</p>
                  </div>
                )}
                {feature.battery && (
                  <div>
                    <p className="font-semibold text-sm text-gray-700">Bateria</p>
                    <p className="text-gray-600 text-xs">{feature.battery}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="rounded-xl shadow-2xl bg-white p-6 md:p-8 max-w-lg w-full transform transition-all duration-300 scale-95 opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-gray-900">{feature.title}</DialogTitle>
          <DialogDescription className="text-gray-600 text-sm sm:text-base">{feature.description}</DialogDescription>
        </DialogHeader>

        {feature.image && (
          <div className="flex justify-center py-4 transform transition-transform duration-300 hover:scale-105">
            <Image src={feature.image} width={500} height={300} alt="Imagem" className="rounded-lg shadow-md" />
          </div>
        )}

        {/* Características Técnicas */}
        {feature.specifications && (
          <div className="mt-4 text-gray-800">
            <h5 className="text-xl font-semibold mb-2">Especificações Técnicas</h5>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              {feature.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        {feature.cta && (
          <DialogFooter className="flex justify-center mt-6">
            <a
              href="http://wa.me/+5511930111440?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              className="bg-[#2B418D] hover:bg-[#1E306E] text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            >
              📩 Solicite um orçamento
            </a>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDialog;
