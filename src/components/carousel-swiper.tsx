"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import Image from 'next/image';

import imageTH100 from "../../public/assets/TH100 - 1.png";
import imageTH300 from "../../public/assets/TH300.png";
import imageTH310 from "../../public/assets/TH310.png";
import imageTH700 from "../../public/assets/TH700 - 1.png";
import imageTH800 from "../../public/assets/TH800 - 1.png";
import imageTH900 from "../../public/assets/TH900 - 2.png";
import imageTH1000 from "../../public/assets/TH1000 - 1.png";
const images = [
  imageTH100, imageTH300, imageTH310, imageTH700, 
  imageTH800, imageTH900, imageTH1000
];

export default function CarouselSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full max-w-xs"
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