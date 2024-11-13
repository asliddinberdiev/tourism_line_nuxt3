<script setup lang="ts">
const cardItem = reactive({
  img: "/images/samarqand.png",
  name: "zomin",
  description: "Uzbekiston Shvitsariyasi",
});
</script>

<template>
  <div
    class="group rounded-md hover:shadow-2xl hover:cursor-pointer transition-shadow relative aspect-square"
  >
    <NuxtImg
      sizes="200px md:400px lg:600px"
      preload
      loading="lazy"
      format="webp"
      quality="70"
      :alt="cardItem.name"
      :src="cardItem.img"
      class="rounded-md w-full h-full object-cover -z-10 absolute top-0 left-0"
      height="200"
      width="200"
    />
    <div
      class="rounded-md h-full flex flex-col items-center justify-end bg-black/30 pb-10"
    >
      <div
        class="group-hover:-translate-y-4 text-center transition-all ease-linear duration-300"
      >
        <h1 class="text-white font-semibold uppercase text-2xl">
          {{ cardItem.name }}
        </h1>
        <p class="text-white/70 font-medium">
          {{ cardItem.description }}
        </p>
      </div>
    </div>
  </div>
</template>
