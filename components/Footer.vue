<script setup lang="ts"></script>
<template>
   <footer
      class="bg-blue-100 h-min px-7 py-7 sm:px-12 md:px-16 lg:px-20 xl:px-28 flex justify-between flex-col md:flex-row"
    >
      <!-- logo -->
      <div
        class="w-full mb-5 md:mb-0 flex flex-col justify-between items-center md:items-start"
      >
        <a href="/">
          <img
            src="/imgs/logo.png"
            alt="durmon logo"
            width="160"
            height="52"
            loading="lazy"
            class="object-fill pb-3"
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
              <a href="#apartment" class="uppercase hover:text-blue-900 transition-colors duration-300 ease-in-out"> Bosh sahifa </a>
            </li>
            <li>
              <a href="#gallery" class="uppercase  hover:text-blue-900 transition-colors duration-300 ease-in-out"> So`rov qoldirish </a>
            </li>
          </ul>
        </div>

        <!-- contact -->
        <div>
          <h2 class="font-medium text-xl mb-4 uppercase">CONTACTS</h2>
          <p>
            <span class="uppercase text-nowrap  hover:text-blue-900 transition-colors duration-300 ease-in-out">Biz bilan aloqa</span>
            <br />
            <a href="tel:+998900270708">+998 90 0270708</a>
            <br />
            <a href="tel:+998900270708">+998 90 0270708</a>
            <br />
            <a href="tel:+998900270708">+998 90 0270708</a>
          </p>

        
        </div>
      </div>

      <p class="text-sm text-black/40 block md:hidden text-center mt-3">
        © All rights reserved.
      </p>
    </footer>
</template>
