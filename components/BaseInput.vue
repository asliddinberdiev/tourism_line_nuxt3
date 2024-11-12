<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
});

const model = defineModel();
</script>

<template>
  <input
    v-bind="$attrs"
    class="border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-600 w-full"
    type="text"
    :placeholder="placeholder"
    v-model="model"
  />
</template>
