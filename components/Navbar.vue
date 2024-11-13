<script setup lang="ts"></script>

<template>
  <div class="h-16 w-full bg-black/70 fixed top-0 left-0 z-10">
    <nav
      class="h-16 py-5 px-2 md:px-10 xl:px-14 flex items-center justify-between"
    >
      <!-- logo -->
      <a href="/">
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
      </a>

      <!-- desktop menu -->
      <ul
        class="hidden md:flex items-center justify-between md:gap-x-14 lg:gap-x-16 xl:gap-x-24"
      >
        <li>
          <a
            href="/"
            class="text-white text-xl font-semibold uppercase hover:text-blue-700 transition-colors duration-300 ease-in-out"
          >
            Bosh sahifa
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="text-white text-xl font-semibold uppercase hover:text-blue-700 transition-colors duration-300 ease-in-out"
          >
            Sayohatlar
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            class="text-white text-xl font-semibold uppercase hover:text-blue-700 transition-colors duration-300 ease-in-out"
          >
            Biz haqimizda
          </a>
        </li>
        <li>
          <button
            type="button"
            class="bg-primary px-7 py-1.5 rounded-3xl font-medium hover:text-white transition-colors duration-300 ease-in-out"
          >
            Contact
          </button>
        </li>
      </ul>

      <!-- mobile menu -->
      <div
        class="flex md:hidden flex-col w-8 gap-y-1.5 hover:cursor-pointer hover:gap-y-1 transition-all duration-300"
      >
        <span class="inline-block w-full py-0.5 bg-black"></span>
        <span class="inline-block w-full py-0.5 bg-black"></span>
        <span class="inline-block w-full py-0.5 bg-black"></span>
      </div>
    </nav>
  </div>
</template>
