import { useTranslations } from "next-intl";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = () => {
  const t = useTranslations();

  const rating = 4.6; // Example rating

  return (
    <div className="bg-background p-4">
      <div className="flex flex-wrap items-center gap-x-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">35 AED</h2>
        </div>
        <div className="h-5 w-[2px] rounded bg-gray-300"></div>
        <div className="flex items-center gap-x-4">
          <h2 className="text-2xl line-through">74.47 AED</h2>
          <div className="border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 flex items-center rounded-full bg-[#00c400] px-2 py-1 font-medium text-white">
            <svg
              className="me-1 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"></path>
            </svg>
            53 %
          </div>
        </div>
      </div>
      <div className="flex justify-between py-2 text-sm">
        <div className="flex justify-center items-center">
          {[...Array(5)].map((_, i) => {
            if (i < Math.floor(rating)) {
              return <FaStar key={i} className="text-yellow-400" />;
            } else if (i === Math.floor(rating) && rating % 1 !== 0) {
              return <FaStarHalfAlt key={i} className="text-yellow-400" />;
            } else {
              return <FaStar key={i} className="text-gray-300" />;
            }
          })}
          <p className="mx-2">4.6 (365 {t("HomePage.rating")}) </p>
        </div>
        <p>365 {t("HomePage.piecesInStock")}</p>
      </div>
    </div>
  );
};

export default ProductCard;
