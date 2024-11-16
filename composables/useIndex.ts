export default function useIndex() {
  const menus = [
    {
      path: "tours",
      text: "sayohatlar",
    },
    {
      path: "gallery",
      text: "gallery",
    },
    {
      path: "about",
      text: "about",
    },
    {
      path: "contact",
      text: "contact",
    },
  ];
  const headerCarousels = [
    {
      img: "/images/samarqand.webp",
      info: "Samarqand Madaniyatlar chorrahasi",
    },
    {
      img: "/images/buxoro.jpg",
      info: "Buxoro Islom madaniyati poytaxti",
    },
    {
      img: "/images/xorazm.jpg",
      info: "Xorazm - Turk dunyosining poytaxti",
    },
  ];

  const travelCards = [
    {
      img: "/images/shahrisabz.jpg",
      name: "shahrisabz",
    },
    {
      img: "/images/tashkent.jpg",
      name: "tashkent",
    },
    {
      img: "/images/nukus.jpg",
      name: "nukus",
    },
    {
      img: "/images/xiva.webp",
      name: "xiva",
    },
  ];

  const infoCards = [
    {
      icon: "/images/tashkent.jpg",
      title: "Eng yaxshi turlar",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusamus quisquam adipisci eligendi.",
    },
    {
      icon: "/images/tashkent.jpg",
      title: "Eng yaxshi turlar",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusamus quisquam adipisci eligendi.",
    },
    {
      icon: "/images/tashkent.jpg",
      title: "Eng yaxshi turlar",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusamus quisquam adipisci eligendi.",
    },
    {
      icon: "/images/tashkent.jpg",
      title: "Eng yaxshi turlar",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusamus quisquam adipisci eligendi.",
    },
    {
      icon: "/images/tashkent.jpg",
      title: "Eng yaxshi turlar",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusamus quisquam adipisci eligendi.",
    },
    {
      icon: "/images/tashkent.jpg",
      title: "Eng yaxshi turlar",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusamus quisquam adipisci eligendi.",
    },
  ];

  const messengerCards = [
    {
      url: "https://t.me/berdiev_blogs",
      img: "/images/telegram.svg",
      name: "telegram",
    },
    {
      url: "https://t.me/berdiev_blogs",
      img: "/images/telegram.svg",
      name: "instgram",
    },
    {
      url: "https://t.me/berdiev_blogs",
      img: "/images/telegram.svg",
      name: "facebook",
    },
  ];

  const formData = reactive({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  return { menus, headerCarousels, travelCards, infoCards, messengerCards, formData };
}
