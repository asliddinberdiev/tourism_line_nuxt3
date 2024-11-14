<script setup lang="ts">
import type { PropType } from "vue";

interface infoCard {
  icon: string;
  title: string;
  description: string;
}

defineProps({
  card: {
    type: Object as PropType<infoCard>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row">
    <div
      class="flex items-center justify-center p-4 mr-5 w-24 h-24 rounded-full bg-blue-600 aspect-square"
    >
      <NuxtImg
        v-if="card.icon"
        sizes="90px"
        loading="lazy"
        format="webp"
        :alt="card.title"
        :src="card.icon"
        class="w-full h-full object-cover rounded-full"
        height="90"
        width="90"
      />
      <h3 v-else class="text-white uppercase font-semibold text-3xl">
        {{ card.title[0] }}
      </h3>
    </div>
    <div>
      <h2 class="font-semibold mb-3">{{ card.title }}</h2>
      <p class="text-black/50">{{ card.description }}</p>
    </div>
  </div>
</template>
