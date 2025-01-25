import Image from "next/image";
import { LiaCartPlusSolid } from "react-icons/lia";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CgMenuRight, CgMenuLeft } from "react-icons/cg";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-b-gray-200">
      {/* Text with Icon */}
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full hover:shadow-md">
          <Image
            src="https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17118211201281902.webp&w=96&q=75" // Replace with the actual image path
            alt="Icon"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <span className="text-sm font-semibold text-gray-800">
          {t("HomePage.brand")}{" "}
        </span>

        <RiVerifiedBadgeFill className="text-lg text-[#00B9FF]" />
      </div>

      <div className=" flex gap-5 justify-center ">
        {/* Cart Icon */}
        <div className="relative cursor-pointer hover:bg-gray-200 rounded-full p-2">
          <LiaCartPlusSolid className="text-2xl" />
        </div>

        {/* Hamburger Menu */}
        <div className="relative cursor-pointer hover:bg-gray-200 rounded-full p-2">
          {t("lang") === "en" ? (
            <CgMenuRight className="text-2xl" />
          ) : (
            <CgMenuLeft className="text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
}
