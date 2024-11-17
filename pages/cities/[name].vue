<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <h1 class="text-6xl font-semibold text-black text-center mt-10 uppercase">
    {{ route.params.name }}
  </h1>

  <div class="bg-red-500 h-min px-7 py-2 sm:px-12 md:px-16 lg:px-20 xl:px-28">
    <h1
      class="text-center uppercase text-wrap bg-section py-2 font-bold text-2xl lg:text-3xl xl:text-4xl mb-2"
    >
      Toshkent - Zamonaviy megapolis
    </h1>

    <p class="mb-5">
      Toshkent – O‘zbekistonning poytaxti va shu bilan birga Markaziy Osiyodagi
      eng yirik shahardir.Ko'p yillar davomida Toshkent butun dunyodan sayyohlar
      va ishbilarmonlarni jalb qiladigan mamlakatning eng muhim biznes va
      madaniy markazi bo'lib kelgan.
    </p>
    <NuxtImg
      sizes="800px md:1200px lg:1800px"
      preload
      loading="lazy"
      format="webp"
      quality="70"
      alt="form"
      src="/images/buxoro.jpg"
      class="object-cover pb-3"
      width="1800"
    />
    <p class="mb-5">
      Eng mashhur diqqatga sazovor joylar Toshkentda tashrif uchun bir necha kun
      kerak bo‘ladigan diqqatga sazovor joylarning ro‘yxati juda katta.
      <br> ✔️ sayr
      qilish uchun keng va yashil xiyobonlar, favvoralar va ekologik bog‘lar;
      <br> ✔️
      Shahardagi ko‘plab muzeylarda O‘rta Osiyo xalqlari tarixi va madaniyati
      haqidagi noyob asarlar;
      <br> ✔️Buyuk me'moriy ansambllar, masjidlar va
      minoralar;
      <br> ✔️ Har didga mos teatr va galereyalar. Bu yerda har kim
      shaharning eng diqqatga sazovor joylarini ko‘rish uchun o‘z yo‘nalishini
      yaratishi mumkin!
    </p>
  </div>
</template>
