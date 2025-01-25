"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

const InfiniteSlide = () => {
  const t = useTranslations("HomePage");
  return (
    <Swiper
      className="infinite-slide-swiper text-white bg-[#FF0100] "
      modules={[Autoplay]}
      centeredSlides={true} // Keep slides centered
      spaceBetween={5} // Adjust spacing between slides
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={6000}
      allowTouchMove={false}
    >
      <SwiperSlide className=" py-2 md:text-base text-xs font-semibold">
        {t("exclusiveDiscounts")}
      </SwiperSlide>
      <SwiperSlide className=" py-2 md:text-base text-xs font-semibold">
        {t("couponOffer")}
      </SwiperSlide>
      <SwiperSlide className=" py-2 md:text-base text-xs font-semibold">
        {t("raffle")}
      </SwiperSlide>
    </Swiper>
  );
};

export default InfiniteSlide;
