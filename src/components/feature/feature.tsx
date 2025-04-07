"use client";
import React, { useState } from 'react';
import FeatureDialog from "./dialogMachine";
import { Button } from "@/components/ui/button";
import { Container, Section } from "../craft";
import Link from "next/link";
import { FeatureText } from './interfaces/feature-text.interface';

interface FeatureProps {
  id?: string;
  title: string;
  description: string;
  features?: FeatureText[]; 
  media?: React.ReactNode;
  textButton?: string;
  link?: string;
  children?: React.ReactNode;
  barraDePesquisa?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  features = [],
  media,
  textButton,
  link,
  children,
  barraDePesquisa = false,
}) => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a pesquisa
  const [filteredFeatures, setFilteredFeatures] = useState(features);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = features.filter((feature) => {
      return (
        feature.title.toLowerCase().includes(query) ||
        feature.description.toLowerCase().includes(query)
      );
    });
    
    setFilteredFeatures(filtered);
  };

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
        <div className="not-prose relative flex h-80 overflow-hidden rounded-lg w-full">
          {media}
        </div>
      </Container>

      {barraDePesquisa && (
        <Container className="not-prose mb-4">
          <div className="w-full max-w-lg mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Pesquisar por título ou descrição..."
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </Container>
      )}

      <Container className="not-prose">
        <div className="flex flex-col gap-4">
          {children}
          <div className="mt-4 grid gap-2 md:mt-4 md:grid-cols-3">
            {filteredFeatures.map((feature) => (
              <FeatureDialog key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
