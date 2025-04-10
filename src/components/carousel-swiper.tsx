"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

interface CarouselProps {
  images: StaticImageData[];
  className?: string;
}

export default function CarouselSwiper({ images, className }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={`w-full max-w-xs ${className || ""}`}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={800}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}