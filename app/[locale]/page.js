import CountDown from "@/components/homepage/CountDown/CountDown";
import Features from "@/components/homepage/Features/Features";
import Iformations from "@/components/homepage/Informations/Iformations";
import Navbar from "@/components/homepage/Navbar/Navbar";
import OrderNow from "@/components/homepage/OrderNow/OrderNow";
import ProductCard from "@/components/homepage/Price/Price";
import Reviews from "@/components/homepage/Reviews/Reviews";
import InfiniteSlide from "@/components/homepage/Swiper/InfiniteSlide";
import SlideByOne from "@/components/homepage/Swiper/SlideByOne";
import ThumbnailSlider from "@/components/homepage/Swiper/ThumbnailSlider";
import SwitchLang from "@/components/SwitchLang";
import { useTranslations } from "next-intl";

export default function Home({ params: { locale } }) {
  return (
    <main className="wrapper relative overflow-y-auto h-[100svh]   ">
      <InfiniteSlide />
      <SlideByOne />
      <Navbar />
      <ThumbnailSlider />
      <ProductCard />
      <CountDown />
      <Features />
      <Iformations />
      <Reviews />
      <OrderNow locale={locale} />
    </main>
  );
}
