<script setup lang="ts">
const formData = reactive({
  name: "",
  surname: "",
  email: "",
  phone: "",
});

const headerCarousels = [
  {
    img: "/images/samarqand.webp",
    info: "Samarqand Madaniyatlar chorrahasi",
  },
  {
    img: "/images/buxoro.jpg",
    info: "Buxoro Islom madaniyati poytaxti",
  },
  {
    img: "/images/xiva.jpeg",
    info: "Xiva - Turk dunyosining poytaxti",
  },
];

const travelCards = [
  {
    img: "/images/shahrisabz.jpg",
    name: "shahrisabz",
  },
  {
    img: "/images/tashkent.jpg",
    name: "tashkent",
  },
  {
    img: "/images/nukus.jpg",
    name: "nukus",
  },
  {
    img: "/images/xiva.webp",
    name: "xiva",
  },
];
</script>

<template>
  <!-- header -->
  <Header :carousels="headerCarousels" />

  <!-- section travel -->
  <section
    class="py-4 px-4 sm:px-12 md:px-24 lg:px-32 w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
  >
    <TravelCard
      v-for="(card, index) in travelCards"
      :key="index"
      :card="card"
      :data-aos="`${index % 2 === 0 ? 'flip-left' : 'flip-right'}`"
    />
  </section>

  <!-- section form -->
  <section class="flex items-center justify-center p-2 w-full">
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
        class="object-cover w-full md:w-1/2 rounded-md"
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
