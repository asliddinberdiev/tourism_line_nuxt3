<script setup lang="ts">
const { cities } = useIndex();
</script>

<template>
  <h2
    class="uppercase text-wrap font-bold text-3xl xl:text-4xl text-center py-8"
  >
    O'zbekiston shaharlari
  </h2>

  <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4 px-4">
    <NuxtLinkLocale
      v-for="(city, index) in cities"
      :to="`/cities/${city.name}`"
      :key="index"
    >
      <CityCard
        :card="city"
        :data-aos="`${index % 2 === 0 ? 'flip-left' : 'flip-right'}`"
      />
    </NuxtLinkLocale>
  </div>
</template>
