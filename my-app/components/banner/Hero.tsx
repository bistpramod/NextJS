// clinet side component
'use client'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Hero() {
  return (
    <div className="w-full flex">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {/* <Image alt="" src={'https://placehold.co/3000x600'} width={3000} height={400} className="" /> */}
          <img
            alt=""
            src={"https://placehold.co/3000x800?text=Banner+1"}
            width={3000}
            height={400}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={"https://placehold.co/3000x800?text=Banner+2"}
            width={3000}
            height={400}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={"https://placehold.co/3000x800?text=Banner+3"}
            width={3000}
            height={400}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={"https://placehold.co/3000x600"}
            width={3000}
            height={400}
            className=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
