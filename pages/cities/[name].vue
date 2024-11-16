<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1 class="text-6xl font-semibold text-black text-center mt-10 uppercase">{{ route.params.name }}</h1>
</template>

