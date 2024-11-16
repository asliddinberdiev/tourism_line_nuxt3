export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  css: ["@/assets/css/main.css"],
  plugins: [
    { src: "~/plugins/aos", ssr: false, mode: "client" },
    { src: "~/plugins/toast", ssr: false, mode: "client" },
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  i18n: {
    langDir: "./locales",
    defaultLocale: "uz",
    strategy: "prefix_and_default",
    locales: [
      { code: "uz", file: "uz.ts" },
      { code: "en", file: "en.ts" },
      { code: "ru", file: "ru.ts" },
    ],
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
  build: {
    transpile: ["vue-toastification"],
  },
  nitro: {
    publicAssets: [
      {
        baseURL: "/",
        dir: "public/images",
        maxAge: 60 * 60 * 24,
      },
    ],
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
});
