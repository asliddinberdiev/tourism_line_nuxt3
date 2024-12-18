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
  <div class="rounded-2xl relative max-w-[360px] h-[430px] shadow-black/30 shadow-xl">
    <NuxtImg
      sizes="400px lg:600px"
      loading="lazy"
      format="webp"
      :alt="card.name"
      :src="card.img"
      class="rounded-2xl w-full h-full object-cover brightness-[65%]"
    />
    <h1 class="absolute bottom-0 left-0 w-full text-center text-white font-semibold uppercase text-2xl p-10">
      {{ card.name }}
    </h1>
  </div>
</template>
