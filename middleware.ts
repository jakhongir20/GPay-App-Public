import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ru", "uz", "en"],
  defaultLocale: "ru",
  localeDetection: true,
});

export const config = {
  matcher: [
    "/((?!auth/social-callback|auth/social-error|api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|assets).*)",
  ],
};
