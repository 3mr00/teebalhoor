"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

export default function SlideByOne() {
  const t = useTranslations("HomePage");

  return (
    <div className="py-2 bg-[#ec972e]">
      <Swiper
        modules={[Autoplay]}
        loop={true} // Infinite looping
        speed={3000} // Adjust animation speed (lower = faster)
        autoplay={{
          delay: 1, // Delay to 1ms for continuous effect
          disableOnInteraction: false, // Keeps autoplay even after user interaction
        }}
        slidesPerView={1} // Number of visible slides at a time
        style={{
          width: "100%",
        }}
      >
        <SwiperSlide className=" text-center">
          <p className="text-white py-2 text-center text-md font-medium ">
            {t("nonStopOffers")}
          </p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
          <p className="text-white py-2 text-center text-md font-medium ">
            {t("freeDelivery")}
          </p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
          <p className="text-white py-2 text-center text-md font-medium ">
            {t("cashOnDelivery")}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
