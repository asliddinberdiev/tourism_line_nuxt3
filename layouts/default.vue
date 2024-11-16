<template>
  <div class="bg-white">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style>
/* Chrome, Safari and Opera */
html::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
