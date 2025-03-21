import FeatureDialog from "./dialogMachine";
import { Button } from "@/components/ui/button";
import { Container, Section } from "../craft";
import { FeatureProps } from "./interfaces/feature-props.interface";
import Link from "next/link";

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  features = [],
  media,
  textButton,
  link,
  children,
}) => {
  return (
    <Section className="w-full">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-3 py-2">
          <h1
            className="!my-0"
            style={{ fontWeight: 300, fontSize: "56px", lineHeight: "62px", color: "#6C6C6C" }}
          >
            {title}
          </h1>
          {description.split("\n").map((line, index) => (
            <p key={index} className="font-light leading-[1.4] opacity-70">
              {line}
            </p>
          ))}{" "}
          <div className="not-prose flex items-center gap-2">
            {textButton?.trim() && (
              <Button
                className="w-fit"
                asChild
                style={{ backgroundColor: "#2B418D" }}
              >
                <Link href={link ?? "/"}>
                  {textButton}
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="not-prose relative flex h-80 overflow-hidden rounded-lg w-full" >
          {media}
        </div>
      </Container>
      <Container className="not-prose">
        <div className="flex flex-col gap-4">
          {children}
          <div className="mt-4 grid gap-2 md:mt-4 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureDialog key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
