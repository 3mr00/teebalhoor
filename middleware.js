import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation.js";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  // Used when no locale matches
  defaultLocale: "ar",
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    // "/((?!api|_next|_vercel|.*\\..*).*)",

    "/",
    "/(ar|en)/:path*",
  ],
};
