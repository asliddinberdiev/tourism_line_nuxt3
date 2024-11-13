<script setup lang="ts">
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const carousels = [
  {
    img: "/images/samarqand.png",
    info: "Samarqand Madaniyatlar chorrahasi",
  },
  {
    img: "/images/samarqand.png",
    info: "Buxoro Islom madaniyati poytaxti",
  },
  {
    img: "/images/samarqand.png",
    info: "Xiva - Turk dunyosining poytaxti",
  },
];
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :speed="1200"
    :navigation="true"
    :modules="[EffectCreative, Pagination, Navigation]"
    class="h-dvh w-full"
  >
    <swiper-slide v-for="(carousel, index) in carousels" :key="index">
      <NuxtImg
        sizes="400px md:800px lg:1000px"
        preload
        loading="eager"
        format="auto"
        quality="70"
        :src="carousel.img"
        :alt="carousel.info"
        class="object-cover w-full h-full"
        height="200"
        width="200"
      />
      <div
        class="z-10 absolute top-0 left-0 w-full h-full bg-black/30 flex items-end justify-center"
      >
        <h1
          class="text-white text-4xl font-bold mb-32 mx-3 text-center backdrop-blur-sm p-2 bg-black/30 rounded-md"
        >
          {{ carousel.info }}
        </h1>
      </div>
    </swiper-slide>
  </swiper>
</template>
