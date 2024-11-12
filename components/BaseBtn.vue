<template>
  <button
    v-bind="$attrs"
    class="bg-blue-500 hover:bg-blue-600 text-white transition-colors rounded-md px-2 py-1 w-full"
  >
    <slot />
  </button>
</template>
