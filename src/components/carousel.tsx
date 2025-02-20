import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import TH100 from '../../public/assets/TH100 - 1.png';
import TH300 from '../../public/assets/TH300.png';
import TH800 from '../../public/assets/TH800 - 1.png';
import TH1000 from '../../public/assets/TH1000 - 1.png';
import Image from "next/image";

export function CarouselDemo() {
    const images = [TH300, TH800, TH1000, TH100];
  
    return (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div>
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }