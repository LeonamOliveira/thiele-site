import Image from "next/image";
import ImageMachine from '../../public/assets/Máqiuinas.png';
import ImageLogo from '../../public/assets/thiele-icon.png';
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
        <header className="w-full bg-background border-border mt-12">
        <div style={{backgroundColor: '#2B418D'}} className="container flex flex-col md:flex-row items-center justify-between py-4">
            <div className="text-left w-full md:w-auto">
                <p className="text-center" style={{color: '#FFFFFF'}}>
                    Central de atendimento: (11) 93011-1440
                </p>
            </div>
            <div className="text-right w-full md:w-auto"> 
                <p className="" style={{color: '#FFFFFF'}}>
                    comercial@thiele.com.br
                </p>
            </div>
        </div>
                <Image
                    src={ImageLogo}
                    width={350}
                    height={200}
                    alt="Máquinas"                
                ></Image>
        </header>
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Image
                            src={ImageMachine}
                            width={700}
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