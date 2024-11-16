<script setup lang="ts">
const { headerCarousels, cities, infoCards, messengers, formData } = useIndex();
</script>

<template>
  <!-- header -->
  <Header :carousels="headerCarousels" />

  <!-- section cites -->
  <section class="py-4 px-4 sm:px-12 md:px-24 lg:px-32 w-full">
    <Heading>O'zbekiston shaharlari</Heading>

    <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
  </section>

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
  <section
    class="py-4 px-4 sm:px-12 md:px-24 lg:px-32 flex items-center justify-center"
  >
    <div
      class="flex justify-between items-center w-full bg-blue-100 rounded-2xl"
    >
      <NuxtImg
        sizes="200px md:400px lg:600px"
        preload
        loading="lazy"
        format="webp"
        quality="80"
        alt="form"
        src="/images/samarqand.webp"
        class="object-cover rounded-s-2xl flex-1"
        width="200"
      />
      <div class="flex-1 flex items-center justify-around">
        <Messenger
          v-for="(card, index) in messengers"
          :card="card"
          :key="index"
        />
      </div>
    </div>
  </section>

  <!-- section form -->
  <section class="flex items-center justify-center p-2">
    <div
      class="flex flex-col md:flex-row justify-between items-center max-w-screen-lg gap-4 md:gap-8"
    >
      <NuxtImg
        sizes="200px md:400px lg:600px"
        preload
        loading="lazy"
        format="webp"
        quality="80"
        alt="form"
        src="/images/samarqand.webp"
        class="object-cover w-full md:w-1/2 rounded-2xl"
        height="200"
        width="200"
      />
      <div class="flex items-center flex-col w-full md:w-1/2 gap-4">
        <h2 class="mt-3 font-medium uppercase text-xl md:text-2xl">
          Lets us plan your dream trip - just fill out the form
        </h2>
        <BaseInput v-model="formData.name" placeholder="Name" />
        <BaseInput v-model="formData.surname" placeholder="Surname" />
        <BaseInput v-model="formData.email" placeholder="Email" />
        <BaseInput v-model="formData.phone" placeholder="Phone Number" />

        <BaseBtn>Send</BaseBtn>
      </div>
    </div>
  </section>
</template>
