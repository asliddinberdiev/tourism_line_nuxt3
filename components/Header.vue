<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
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

const { width } = useWindowSize();
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :speed="width < 768 ? 1000 : 200"
    :navigation="true"
    :modules="[EffectCreative, Pagination, Navigation]"
    class="swiper w-full"
  >
    <swiper-slide v-for="(carousel, index) in carousels" :key="index">
      <NuxtImg
        sizes="800px md:1200px lg:1400px"
        preload
        format="png"
        :src="carousel.img"
        :alt="carousel.info"
        class="object-cover w-full h-full"
      />
      <div
        class="z-10 absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center"
      >
        <h1
          class="text-white text-4xl md:text-5xl font-bold text-center w-9/12"
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
.swiper-button-prev {
  color: white !important;
}
.swiper-button-next {
  color: white !important;
}
</style>