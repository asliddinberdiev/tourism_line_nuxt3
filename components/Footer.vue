<script setup lang="ts"></script>
<template>
  <!-- footer -->
  <footer
    class="bg-white h-min px-4 py-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex justify-between flex-col md:flex-row"
  >
    <!-- logo -->
    <div
      class="w-full mb-5 md:mb-0 flex flex-col justify-between items-center md:items-start"
    >
      <a href="/">
        <img
          src="./imgs/logo-2.png"
          alt="durmon logo"
          width="231"
          height="52"
          loading="lazy"
          class="object-fill"
        />
      </a>
      <p class="text-sm text-black/40 hidden md:block">
        © All rights reserved.
      </p>
    </div>

    <!-- data -->
    <div
      class="flex justify-between flex-col md:flex-row md:ml-4 sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20"
    >
      <!-- about -->
      <div>
        <h2 class="font-medium text-xl mb-4 uppercase text-nowrap">
          About the project
        </h2>
        <ul class="flex flex-col gap-2">
          <li>
            <a href="#apartment" class="uppercase"> Apartments </a>
          </li>
          <li>
            <a href="#gallery" class="uppercase"> Gallery </a>
          </li>
        </ul>
      </div>

      <!-- contact -->
      <div>
        <h2 class="font-medium text-xl mb-4 uppercase">CONTACTS</h2>
        <p>
          <span class="uppercase text-nowrap">Sales department phone:</span>
          <br />
          <a href="tel:+998900270708">+998 90 0270708</a>
        </p>

        <p class="uppercase">
          <span>Opening hours: Mon-Fri</span>
          <br />
          <span>from 09:00 to 18:00</span>
        </p>
      </div>
    </div>

    <p class="text-sm text-black/40 block md:hidden text-center mt-3">
      © All rights reserved.
    </p>
  </footer>
</template>
