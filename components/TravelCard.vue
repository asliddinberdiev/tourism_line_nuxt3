<script setup lang="ts">
import type { PropType } from "vue";

interface cardProp {
  img: string;
  name: string;
}

defineProps({
  card: {
    type: Object as PropType<cardProp>,
    required: true,
  },
});
</script>

<template>
  <div
    class="clip_path group rounded-md hover:shadow-2xl hover:shadow-black hover:cursor-pointer transition-all duration-500 relative aspect-square overflow-hidden"
  >
    <NuxtImg
      sizes="200px md:400px lg:600px"
      loading="lazy"
      format="webp"
      :alt="card.name"
      :src="card.img"
      class="rounded-md w-full h-full object-cover -z-10 absolute top-0 left-0 group-hover:scale-110 transition-all duration-300"
      height="200"
      width="200"
    />
    <div
      class="rounded-md h-full flex flex-col items-center justify-end bg-black/30 pb-10"
    >
      <h1 class="text-center text-white font-semibold uppercase text-2xl">
        {{ card.name }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
.clip_path {
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}
</style>
