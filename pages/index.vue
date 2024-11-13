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
  <section class="py-2 px-2 h-72 w-1/2 flex items-center justify-center">
    <TravelCard />
  </section>

  <!-- section form -->
  <section class="flex items-center justify-center p-2 w-full">
    <div
      class="flex flex-col md:flex-row justify-between items-center max-w-screen-lg gap-4 md:gap-8"
    >
      <img
        class="object-cover w-full md:w-1/2 rounded-md"
        width="300"
        height="300"
        src="https://alanyatransfer.com/wp-content/uploads/2023/07/Kapadokya-transfer.png"
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
