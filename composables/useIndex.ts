export default function useIndex() {
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

  const formData = reactive({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  return { headerCarousels, travelCards, formData };
}
