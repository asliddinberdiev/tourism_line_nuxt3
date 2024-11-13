export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  i18n: {
    langDir: "./locales",
    locales: [
      { code: "en", file: "en.ts" },
      { code: "ru", file: "ru.ts" },
      { code: "uz", file: "uz.ts" },
    ],
    defaultLocale: "uz",
    strategy: "prefix_and_default",
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  nitro: {
    publicAssets: [
      {
        baseURL: "/",
        dir: "public/imgs",
        maxAge: 60 * 60 * 24 * 365,
      },
    ],
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
});
