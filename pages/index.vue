<script setup lang="ts">
const { headerCarousels, cities, infoCards, messengers, formData } = useIndex();
</script>

<template>
  <!-- header -->
  <Header :carousels="headerCarousels" />

  <div class="container mx-auto">
    <!-- section cites -->
    <section class="flex justify-center flex-col">
      <Heading>O'zbekiston shaharlari</Heading>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto"
      >
        <NuxtLinkLocale
          v-for="(city, index) in cities"
          :to="`/cities/${city.name}`"
          :key="index"  
        >
          <CityCard :card="city" />
        </NuxtLinkLocale>
      </div>
    </section>
  </div>

  <!-- section info -->
  <section class="py-4 px-4 sm:px-12 md:px-24 lg:px-32">
    <Heading>Nima uchun 99% sayyohlar bizni tanlaydilar</Heading>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12"
    >
      <InfoCard v-for="(card, index) in infoCards" :key="index" :card="card" />
    </div>
  </section>

  <!-- section contact -->
  <section class="py-4 px-4 sm:px-12 md:px-24 lg:px-32 w-full">
    <Heading>biz bilan bog'lanish</Heading>
    <Contact data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
  </section>
</template>
