<script setup lang="ts">
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { PropType } from "vue";

interface carouselItem {
  img: string;
  info: string;
}

defineProps({
  carousels: {
    type: Array as PropType<carouselItem[]>,
    requered: true,
  },
});
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
    class="swiper w-full"
  >
    <swiper-slide v-for="(carousel, index) in carousels" :key="index">
      <NuxtImg
        sizes="800px md:1200px lg:1400px"
        preload
        format="webp"
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

<style>
.swiper {
  height: calc(100dvh - 60px);
}
</style>