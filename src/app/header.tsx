import Image from "next/image";
import ImageMachine from '../../public/assets/Máqiuinas.png';
import ImageLogo from '../../public/assets/image.png';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
export default function Header() {
    return (
        <>
        <footer className="w-full bg-background border-t border-border mt-4">
        <div className="container flex flex-col md:flex-row items-center justify-between py-4">
            <div className="text-left w-full md:w-auto">
                <p className="text-sm text-muted-foreground whitespace-nowrap md:whitespace-normal">
                        Central de atendimento: (11) 93011-1440
                </p>
            </div>
            <div className="text-right w-full md:w-auto"> 
                <p className="text-sm text-muted-foreground whitespace-nowrap md:whitespace-normal">
                    comercial@thiele.com.br
                </p>
            </div>
            </div>
                <Image
                    src={ImageLogo}
                    width={136}
                    height={114}
                    alt="Máquinas"                
                ></Image>
        </footer>

        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Image
                            src={ImageMachine}
                            width={1000}
                            height={412}
                            alt="Máquinas"                
                        >
                        </Image>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        </>
    )
}