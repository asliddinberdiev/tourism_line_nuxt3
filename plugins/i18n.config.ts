export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.i18n = defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18",
    },
  }));
});
