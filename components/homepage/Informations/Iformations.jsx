import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Iformations = () => {
  const t = useTranslations();

  return (
    <div>
      <div id="overview" className="mx-5 my-3 scroll-m-16 font-bold">
        <p className="mb-1 font-semibold"> {t("HomePage.importantInfo")}</p>
      </div>

      <div className="bg-background rounded-lg pb-10">
        <div className="bg-background rounded-lg p-4 pb-3">
          <div className="text-sm">
            <p className="mb-1 font-semibold">{t("HomePage.usage")}</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-2 p-6">
          <Image
            src={
              "https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17324400121361359(3402x3402).webp&w=640&q=75"
            }
            alt={`teebalhoor`}
            width={400}
            height={400}
            className="w-full rounded-md"
          />
          <Image
            src={
              "https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17324400121361359(3402x3402).webp&w=640&q=75"
            }
            alt={`teebalhoor`}
            width={400}
            height={400}
            className="w-full rounded-md"
          />
          <Image
            src={
              "https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17324400121361359(3402x3402).webp&w=640&q=75"
            }
            alt={`teebalhoor`}
            width={400}
            height={400}
            className="w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Iformations;
