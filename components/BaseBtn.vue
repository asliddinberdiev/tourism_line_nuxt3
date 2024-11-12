<template>
  <button
    v-bind="$attrs"
    class="bg-blue-500 hover:bg-blue-600 text-white transition-colors rounded-md px-4 py-2 w-full"
  >
    <slot />
  </button>
</template>
