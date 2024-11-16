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
    class="rounded-full h-28 w-28 p-5 flex items-center justify-center bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-colors"
  >
    <NuxtImg
      sizes="100px"
      loading="lazy"
      format="webp"
      :alt="card.name"
      :src="card.img"
      class="w-full h-full rounded-full object-cover"
      height="100"
      width="100"
    />
  </div>
</template>
