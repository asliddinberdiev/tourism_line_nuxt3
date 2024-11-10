export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.i18n = defineI18nConfig(() => ({
    legacy: false,
    locale: "uz",
    fallbackLocale: "uz",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18",
    },
  }));
});
