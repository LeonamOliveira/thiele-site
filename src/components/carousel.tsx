import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image, { StaticImageData } from "next/image";
interface CarouselMachineProps {
  images?: string[] | StaticImageData[];
}

export function CarouselMachine({ images = [] }: CarouselMachineProps) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={1000}
                  height={400}
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
