import { FeatureText } from "./feature-text.interface";

export interface FeatureProps {
  title: string;
  description: string;
  features?: FeatureText[];
  children?: React.ReactNode;
  media?: React.ReactNode;
  textButton?: string;
}