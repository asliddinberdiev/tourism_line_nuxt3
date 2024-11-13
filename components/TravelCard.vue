<script setup lang="ts">
const cardItem = reactive({
  img: "/imgs/samarqand.png",
  name: "zomin",
  description: "Uzbekiston Shvitsariyasi",
});
</script>

<template>
  <div class="rounded-md">
    <NuxtImg
      sizes="200px md:400px lg:600px"
      preload
      loading="lazy"
      format="webp"
      quality="80"
      :alt="cardItem.name"
      :src="cardItem.img"
      class="rounded-full w-40 h-40 object-cover"
      height="160"
      width="160"
    />
  </div>
</template>
