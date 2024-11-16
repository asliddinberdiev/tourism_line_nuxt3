<script setup lang="ts">
import type { PropType } from "vue";

interface cardProp {
  img: string;
  name: string;
  url: string;
}

defineProps({
  card: {
    type: Object as PropType<cardProp>,
    required: true,
  },
});
</script>

<template>
  <a
    :href="card.url"
    class="rounded-full h-10 w-10 p-1.5 flex items-center justify-center bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-colors"
  >
    <NuxtImg
    v-if="card.img"
      sizes="48px"
      loading="lazy"
      format="webp"
      :alt="card.name"
      src="/images/telegram.svg"
      class="w-full h-full rounded-full object-cover"
      height="48"
      width="48"
    />
    <span v-else class="text-white uppercase font-bold">{{ card.name[0] }}</span>
  </a>
</template>
