import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const t = useTranslations();

  return (
    <div>
      <div id="review" className="mx-5 my-3 scroll-m-16 font-bold">
        {t("HomePage.reviews")}{" "}
      </div>
      <div className="bg-background rounded-lg p-4">
        <div className="mx-auto flex w-[fit-content] flex-col items-center rounded border px-3 py-2">
          <p className="text-[1.8rem] font-bold">4.9</p>
          <p className=" flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </p>

          <p className="text-[1.3rem] font-bold">356 {t("HomePage.rating")} </p>
        </div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col border-b border-b-gray-300 py-4"
          >
            <div className="flex">
              <span className="h-[40px] w-[40px]">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200">
                  <Image
                    src="https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17118211201281902.webp&w=96&q=75" // Replace with the actual image path
                    alt="Icon"
                    width={100}
                    height={100}
                  />
                </span>
              </span>
              <div className="mx-2 flex flex-col">
                <p className="ms-1 text-[.9rem] font-bold">نجلاء سالم</p>

                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <p className="mx-1 mb-0 text-sm text-gray-700">(5)</p>
                </div>
              </div>
            </div>
            <div className="ms-[3.1rem] mt-1">
              وايد حبيت بخور الدرهم، الريحة ثابتة وتعطي البيت جو من الرفاهية
            </div>
          </div>
        ))}
      </div>

      <div className="bg-background relative mb-20 mt-5 rounded-t-lg">
        <div className="flex justify-center py-5">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://wa.me/+971547744211/?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20TEEBALHOOR%20%D8%B4%D8%A7%D9%87%D8%AF%D8%AA%20%D8%A7%D8%B9%D9%84%D8%A7%D9%86%20%20(https%3A%2F%2Fteebalhoor.com%2Fadespresso%2F1732440014%3Fesp_id%3D9f86e5970757b154071f92a51185872001b9aa7830b14ea4079593c627a6eda7)%20%20%D8%A8%D8%AE%D9%88%D8%B1%20%D8%AF%D8%B1%D9%87%D9%85%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A(%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D8%B9%D9%8A%D8%AF%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%20%D8%A8%D9%83%D9%85%D9%8A%D8%A9%20%D9%85%D8%AD%D8%AF%D9%88%D8%AF%D8%A9)%F0%9F%98%8D%F0%9F%87%A6%F0%9F%87%AA%F0%9F%87%A6%F0%9F%87%AA%20%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%86%20%D8%A3%D8%B7%D9%84%D8%A8"
            className="bg-[#ec972e] flex h-10 w-10 items-center justify-center rounded hover:cursor-pointer"
          >
            <svg
              className="text-white"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
              <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-3 text-center">
          <div
            className="text-[#ec972e] text-[.8rem] transition-all duration-300 hover:cursor-pointer hover:opacity-85"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R2qafkpuuja:"
            data-state="closed"
          >
            {t("HomePage.reviews")}{" "}
          </div>
          <div
            className="text-[#ec972e] border-l border-r text-[.8rem] transition-all duration-300 hover:cursor-pointer hover:opacity-85"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R2qafkpuuja:"
            data-state="closed"
          >
            {t("HomePage.termsConditions")}{" "}
          </div>
          <div
            className="text-[#ec972e] text-[.8rem] transition-all duration-300 hover:cursor-pointer hover:opacity-85"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R2qafkpuuja:"
            data-state="closed"
          >
            {t("HomePage.privacyPolicy")}{" "}
          </div>
        </div>
        <div className="bg-[#ec972e] mt-2 rounded-t-lg py-2 text-center text-[.7rem] text-white">
          @ Copyright 2025 <span className="uppercase">TEEBALHOOR.</span>All
          right reserved.
        </div>
      </div>
    </div>
  );
};
export default Reviews;
