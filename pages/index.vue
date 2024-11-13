<script setup lang="ts">
const formData = reactive({
  name: "",
  surname: "",
  email: "",
  phone: "",
});
</script>

<template>
  <!-- header -->
  <Header />

  <!-- section travel -->
  <section
    class="py-2 px-2 w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
  >
    <TravelCard v-for="index in 12" />
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
        quality="70"
        alt="form"
        src="/images/samarqand.png"
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
