<script setup lang="ts">
const formData = reactive({
  name: "",
  surname: "",
  email: "",
  phone: "",
});
</script>

<template>
  <!-- form -->
  <section class="flex items-center justify-center p-2 w-full">
    <div
      class="flex flex-col md:flex-row justify-between items-center max-w-screen-lg gap-4"
    >
      <img
        class="object-cover w-full md:w-1/2 rounded-md"
        width="300"
        height="300"
        src="https://alanyatransfer.com/wp-content/uploads/2023/07/Kapadokya-transfer.png"
      />

      <div class="flex items-center flex-col w-full md:w-1/2">
        <h2 class="mt-3 font-medium uppercase text-xl md:text-2xl">
          Lets us plan your dream trip - just fill out the form
        </h2>
        <BaseInput v-model="formData.name" placeholder="Name" class="mb-3" />
        <BaseInput
          v-model="formData.surname"
          placeholder="Surname"
          class="mb-3"
        />
        <BaseInput v-model="formData.email" placeholder="Email" class="mb-3" />
        <BaseInput
          v-model="formData.phone"
          placeholder="Phone Number"
          class="mb-3"
        />

        <BaseBtn>Send</BaseBtn>
      </div>
    </div>
  </section>
</template>
