import { ref } from "vue";
import { defineStore } from "pinia";

export const useBotStore = defineStore("bot", {
  state: () => ({
    admins: ref([
      { id: "7274667891", name: "asliddin" },
      { id: "892473398", name: "furqat uzmobile" },
      { id: "5065091729", name: "furqat beeline" },
    ]),
  }),
  actions: {
    async sendMessage(chat_id: string, message: string) {
      await useFetch(
        "https://api.telegram.org/bot7696511152:AAFSCSHKUAx24zEoiDS52sJnfF6sqAX2vsA/sendMessage",
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
