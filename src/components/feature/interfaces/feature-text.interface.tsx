import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface FeatureText {
  id?: string;
  title: string;
  href?: string;
  description: string;
  cta?: string;
  learnMore?: string;
  image?: string | StaticImport;
  capacity?: string;
  productivity?: string;
  battery?: string;
  specifications?: string[];
  message?: string;
}
