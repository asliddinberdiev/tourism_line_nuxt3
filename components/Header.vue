<script lang="ts"></script>

  

<template>
  <nav
    class="h-16 px-2 md:px-10 xl:px-14 flex items-center justify-between bg-red-600"
  >
    <!-- logo -->
    <a href="/">
      <img
        src="/imgs/logo-2.png"
        alt="travel line"
        height="h-16"
        class="object-cover h-10"
      />
    </a>

    <!-- desktop menu -->
    <ul
      class="hidden md:flex items-center justify-between md:gap-x-14 lg:gap-x-16 xl:gap-x-24"
    >
      <li>
        <a
          href="/"
          class="text-xl uppercase text-text hover:text-text transition-colors"
        >
          Home
        </a>
      </li>
      <li>
        <a href="#about" class="text-xl uppercase hover:text-text"> About </a>
      </li>
      <li>
        <a
          href="#gallery"
          class="text-xl uppercase hover:text-text transition-colors"
        >
          Gallery
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
    <!-- <span class="inline-block w-full py-0.5 bg-black"></span>
        <span class="inline-block w-full py-0.5 bg-black"></span>
        <span class="inline-block w-full py-0.5 bg-black"></span> -->
    </div>
 
  </nav>
</template>
