<script setup lang="ts">
const { headerCarousels, travelCards, infoCards, formData } = useIndex();

onMounted(() => {
  localStorage.setItem("test1", "123");
  localStorage.setItem("test2", "321");
  let cookie = useCookie("username", { secure: true, maxAge: 5 });
  cookie.value = "1234567";
});
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

  <!-- section info -->
  <section class="py-4 px-4 sm:px-12 md:px-24 lg:px-32">
    <h2 class="font-medium text-2xl md:text-5xl mb-10">
      Nima uchun 99% sayyohlar bizni tanlaydilar
    </h2>

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
      class="flex justify-between items-center w-full bg-green-500 rounded-md"
    >
      <NuxtImg
        sizes="200px md:400px lg:600px"
        preload
        loading="lazy"
        format="webp"
        quality="80"
        alt="form"
        src="/images/samarqand.webp"
        class="object-cover rounded-s-md flex-1"
        width="200"
      />
      <div class="flex-1 flex items-center justify-around">
        <div
          class="rounded-full h-28 w-28 p-5 flex items-center justify-center bg-white/90"
        >
          <NuxtImg
            sizes="100px"
            loading="lazy"
            format="webp"
            alt="telegram"
            src="/images/telegram.png"
            class="w-full h-full rounded-full object-cover"
            height="100"
            width="100"
          />
        </div>

        <div
          class="rounded-full h-28 w-28 p-5 flex items-center justify-center bg-white/90"
        >
          <NuxtImg
            sizes="100px"
            loading="lazy"
            format="webp"
            alt="facebook"
            src="/images/facebook.png"
            class="w-full h-full rounded-full object-cover"
            height="100"
            width="100"
          />
        </div>

        <div
          class="rounded-full h-28 w-28 p-5 flex items-center justify-center bg-white/90"
        >
          <NuxtImg
            sizes="100px"
            loading="lazy"
            format="webp"
            alt="instagram"
            src="/images/instagram.png"
            class="w-full h-full rounded-full object-cover"
            height="100"
            width="100"
          />
        </div>
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
