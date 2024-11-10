interface Menus {
  path: string;
  title?: string;
  active: boolean;
}

interface State {
  isOpenMenu: boolean;
  menus: Menus[];
}

export const useMainStore = defineStore("main", {
  state: (): State => ({
    isOpenMenu: false,
    menus: [
      {
        path: "about",
        title: "about",
        active: false,
      },
      {
        path: "experience",
        title: "experience",
        active: false,
      },
      {
        path: "blog",
        title: "blog",
        active: false,
      },
    ],
  }),
  getters: {},
});
