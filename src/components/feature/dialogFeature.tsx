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
        <div
          className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
          style={{ backgroundColor: "#2B418D" }}
        >
          <div className="grid gap-4" style={{ backgroundColor: "#2B418D" }}>
            <h4 className="text-xl text-primary" style={{ color: "#FFFFFF" }}>
              <strong>{feature.title}</strong>
            </h4>
            <p className="text-base" style={{ color: "#FFFFFF" }}>
              {feature.description}
            </p>
            <div style={{ background: "#F2F2F2" }}>
              {feature.image && (
                <div className="grid gap-4">
                  <Image
                    src={feature.image}
                    width={500}
                    height={300}
                    alt="Imagem"
                  />
                </div>
              )}
              {feature.capacity && (
                <>
                  <p className="font-bold my-0 leading-3">Capacidade</p>
                  <p className="text-gray-600 my-0 leading-3">
                    {feature.capacity}
                  </p>
                </>
              )}
              {feature.productivity && (
                <>
                  <p className="font-bold leading-3">Produtividade</p>
                  <p className="text-gray-600 leading-3">
                    {feature.productivity}
                  </p>
                </>
              )}
              {feature.battery && (
                <>
                  <p className="font-bold leading-3">Bateria</p>
                  <p className="text-gray-600 leading-3">{feature.battery}</p>
                </>
              )}
            </div>
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
