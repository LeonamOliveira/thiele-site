import Image from "next/image";
import { FeatureText } from "./interfaces/feature-text.interface";
import Link from "next/link";

interface FeatureDialogProps {
  feature: FeatureText; 
}

const FeatureDialog: React.FC<FeatureDialogProps> = ({ feature }) => {
  return (
    <Link href={`/produtos/${feature.id}`} passHref>
      <div className="cursor-pointer block rounded-xl border p-5 md:p-6 shadow-lg bg-gradient-to-r from-[#2B418D] to-[#1E306E] text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex flex-col justify-between gap-4">
          <div className="grid gap-2 text-left">
            <h4 className="text-xl font-semibold">{feature.title}</h4>
            <p className="text-sm opacity-80">{feature.description}</p>

            {feature.image && (
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105">
                <Image src={feature.image} width={500} height={250} alt="Imagem" className="w-full h-[180px] object-cover" />
              </div>
            )}

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
      </div>
    </Link>
  );
};

export default FeatureDialog;
