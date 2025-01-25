import "./globals.css";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata = {
  title: {
    default: " بخور درهم الاماراتي | بخور درهم الاماراتي",
    template: "%s | طيب الحور",
  },
  description:
    "طيب الحور | بخور درهم الاماراتي(عروض العيد الوطني بكمية محدودة)😍🇦🇪🇦🇪",
  keywords: ["بخور درهم الاماراتي", "بخور"],
};

export default function RootLayout({ children, params: { locale } }) {
  const t = useTranslations();
  const messages = useMessages();

  return (
    <html lang={locale} dir={t("dir")} className={`${cairo.className}  `}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
