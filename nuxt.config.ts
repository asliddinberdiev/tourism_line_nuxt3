export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@pinia/nuxt"],
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
});
