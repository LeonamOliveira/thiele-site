import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface FeatureText {
  id?: string;
  title: string;
  href?: string;
  description: string;
  cta?: string;
  image?: string | StaticImport;
  capacity?: string;
  productivity?: string;
  battery?: string;
  specifications?: string[];
  message?: string;
  carousel?: StaticImageData[];
  typeEnergy?: string;
}
