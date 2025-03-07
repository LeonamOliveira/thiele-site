import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface FeatureText {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  learnMore?: string;
  image?: string | StaticImport;
  capacity?: string;
  productivity?: string;
  battery?: string;
}
