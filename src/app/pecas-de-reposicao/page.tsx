import Header from "../header";
import Footer from "../footer";
import { featureRepositionText } from "@/components/feature/reposition-feature";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FeatureText } from "@/components/feature/interfaces/feature-text.interface";

const renderFeatureItem = (feature: FeatureText) => (
  <Dialog key={feature.title}>
    <DialogTrigger asChild>
      <div
        className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
        style={{ backgroundColor: "#2B418D" }}
      >
        <div className="grid gap-4" style={{ backgroundColor: "#2B418D" }}>
          <h4 className="text-xl text-primary" style={{ color: "#FFFFFF" }}>
            <strong>{feature.title}</strong>
          </h4>
          <p className="text-base opacity-75" style={{ color: "#FFFFFF" }}>
            {feature.description}
          </p>
          {feature.image && (
            <div className="grid gap-4">
              <Image
                src={feature.image}
                width={500}
                alt={"Imagem"}
                height={300}
              ></Image>
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
          className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
          style={{ backgroundColor: "##F2F2F2" }}
        >
          {feature.image && (
            <Image
              src={feature.image}
              width={500}
              alt={"Imagem"}
              height={300}
            ></Image>
          )}
          {feature.capacity && (
            <>
              <p className="font-bold my-0 leading-3">Capacidade</p>
              <p className="text-gray-600 my-0 leading-3">{feature.capacity}</p>
            </>
          )}
          {feature.productivity && (
            <>
              <p className="font-bold leading-3">Produtividade</p>
              <p className="text-gray-600 leading-3">{feature.productivity}</p>
            </>
          )}
          {feature.battery && (
            <>
              <p className="font-bold leading-3">Bateria </p>
              <p className="text-gray-600 leading-3">{feature.battery}</p>
            </>
          )}
          {feature.cta && (
            <div className="grid gap-4 bg-[#2B418D]">
              <Button className="rounded-md bg-[#2B418D]">{feature.cta}</Button>
            </div>
          )}
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="mt-12 grid gap-12 md:mt-4 md:grid-cols-3">
        {featureRepositionText.map(renderFeatureItem)}
      </div>
      <Footer />
    </div>
  );
}
