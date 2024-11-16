import { ref } from "vue";
import { defineStore } from "pinia";

export const useBotStore = defineStore("bot", {
  state: () => ({
    admins: ref([
      { id: "1930905682", name: "bekzod" },
      { id: "687404285", name: "asliddin" },
      { id: "1961485441", name: "saddam" },
      { id: "6120214656", name: "muhriddin" },
      { id: "5020976062", name: "ozoda" },
    ]),
  }),
  actions: {
    async sendMessage(chat_id: string, message: string) {
      await useFetch(
        "https://api.telegram.org/bot6670180353:AAGp4WUErm5dc5TiSxcV6e0cQm9j8qL5DjA/sendMessage",
        {
          params: {
            chat_id: chat_id,
            parse_mode: "HTML",
            text: message,
          },
        }
      ).catch(function (err) {
        throw err;
      });
    },
  },
});
