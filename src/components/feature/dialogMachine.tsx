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
import { Button } from "@/components/ui/button";
import { FeatureText } from "./interfaces/feature-text.interface";

interface FeatureDialogProps {
  feature: FeatureText;
}

const FeatureDialog: React.FC<FeatureDialogProps> = ({ feature }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col justify-between gap-4 rounded-lg border p-4 md:p-5 transition-all hover:-mt-1 hover:mb-1 bg-[#2B418D] text-white">
          <div className="grid gap-3 text-left">
            <h4 className="text-lg font-bold">{feature.title}</h4>

            <p className="text-sm">{feature.description}</p>

            {feature.image && (
              <div className="w-full bg-gray-200  rounded-md ">
                <Image
                  src={feature.image}
                  width={500}
                  height={250}
                  alt="Imagem"
                  className="w-full h-[180px] md:h-[250px] object-cover rounded-md"
                />
              </div>
            )}

            {(feature.capacity || feature.productivity || feature.battery) && (
              <div className="bg-gray-200 p-3 rounded-md text-gray-800 space-y-3 w-full" >
                {feature.capacity && (
                  <div>
                    <p className="font-bold text-base">Capacidade</p>
                    <p className="text-gray-600 text-sm">{feature.capacity}</p>
                  </div>
                )}
                {feature.productivity && (
                  <div>
                    <p className="font-bold text-base">Produtividade</p>
                    <p className="text-gray-600 text-sm">
                      {feature.productivity}
                    </p>
                  </div>
                )}
                {feature.battery && (
                  <div>
                    <p className="font-bold text-base">Bateria</p>
                    <p className="text-gray-600 text-sm">{feature.battery}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
          <DialogHeader>
            <DialogTitle>{feature.title}</DialogTitle>
            <DialogDescription>{feature.description}</DialogDescription>
            <div
              className="flex flex-col justify-between gap-6 border p-6"
              style={{ backgroundColor: "#F2F2F2" }}
            >
              {feature.image && (
                <Image
                  src={feature.image}
                  width={500}
                  height={300}
                  alt="Imagem"
                />
              )}
            </div>
          </DialogHeader>
        <DialogFooter>
          {feature.cta && (
              <div className="grid gap-4">
                <Button className="bg-[#2B418D] hover:bg-[#1E306E] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                  {feature.cta} 
                </Button>
              </div>
            )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDialog;
