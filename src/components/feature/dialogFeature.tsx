import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
              <div className="w-full">
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
              <div className="bg-gray-200 p-3 rounded-md text-gray-800 space-y-3 w-full">
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
            className="flex flex-col justify-between gap-6 rounded-lg border p-6"
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

            {feature.cta && (
              <div className="grid gap-4 bg-[#2B418D]">
                <Button className="rounded-md bg-[#2B418D]">
                  {feature.cta}
                </Button>
              </div>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDialog;
