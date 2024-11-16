<script setup lang="ts">
const { menus, messengers } = useIndex();
const router = useRouter();

const isOpen = ref(false);
</script>

<template>
  <div
    class="sticky top-0 h-16 w-full backdrop-invert-0 backdrop-opacity-5 bg-black/90 z-10"
  >
    <nav
      class="h-16 py-5 px-2 md:px-10 xl:px-14 flex items-center justify-between"
    >
      <!-- logo -->
      <NuxtLinkLocale to="/">
        <NuxtImg
          sizes="64px"
          preload
          loading="lazy"
          format="webp"
          quality="70"
          src="/images/logo.png"
          class="object-cover h-16 w-16"
          height="64"
          width="64"
        />
      </NuxtLinkLocale>

      <!-- desktop menu -->
      <ul
        class="hidden md:flex items-center justify-between md:gap-x-14 lg:gap-x-16 xl:gap-x-24"
      >
        <li v-for="(menu, index) in menus">
          <NuxtLinkLocale class="flex flex-col" :key="index" :to="menu.path">
            <span
              class="uppercase text-sm lg:text-lg hover:text-white transition-colors hover:cursor-pointer font-medium"
              :class="
                router.currentRoute.value.path.includes(menu.path)
                  ? 'text-white'
                  : 'text-white/50'
              "
            >
              {{ menu.text }}
            </span>
          </NuxtLinkLocale>
        </li>
      </ul>

      <!-- mobile -->
      <div
        @click="isOpen = !isOpen"
        v-if="!isOpen"
        class="flex md:hidden flex-col w-8 gap-y-1.5 hover:cursor-pointer hover:gap-y-1 transition-all duration-300"
      >
        <span class="inline-block w-full py-0.5 bg-white"></span>
        <span class="inline-block w-full py-0.5 bg-white"></span>
        <span class="inline-block w-full py-0.5 bg-white"></span>
      </div>

      <div
        @click="isOpen = !isOpen"
        v-if="isOpen"
        class="h-screen w-full fixed top-0 right-0"
      >
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
          class="bg-black/90 w-2/3 sm:w-1/2 h-screen ml-auto"
        >
          <ul class="flex items-center justify-center pt-10 flex-col">
            <li v-for="(menu, index) in menus" class="text-white mb-2">
              <NuxtLinkLocale :key="index" :to="menu.path">
                <span
                  class="uppercase text-sm lg:text-lg hover:text-white transition-colors hover:cursor-pointer font-medium"
                  :class="
                    router.currentRoute.value.path.includes(menu.path)
                      ? 'text-white'
                      : 'text-white/50'
                  "
                >
                  {{ menu.text }}
                </span>
              </NuxtLinkLocale>
            </li>
            <div
              class="w-full h-16 flex flex-row items-center justify-around px-8 mt-4"
            >
              <Messenger
                v-for="(card, index) in messengers"
                :card="card"
                :key="index"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
