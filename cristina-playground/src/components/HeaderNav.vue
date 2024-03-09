<template>
<header class="bg-sky-blue rounded-b-lg shadow-md">
  <nav class="mx-auto flex max-w-7xl items-center justify-evenly p-6 lg:px-8" aria-label="Global" >
      <a href="#" class="text-sm font-medium leading-6 text-ivory-white text-increase-on-hover hover:text-sky-100">About Me</a>
      <a href="#" class="text-sm font-medium leading-6 text-ivory-white text-increase-on-hover hover:text-sky-100">Education</a>
      <a href="#" class="text-sm font-medium leading-6 text-ivory-white text-increase-on-hover hover:text-sky-100">My Projects</a>
      <a href="#" class="text-sm font-medium leading-6 text-ivory-white text-increase-on-hover hover:text-sky-100">Contact</a>
  </nav>

  <!-- Mobile version -->
  <div class="lg:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">About Me</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">Education</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">My Projects</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style scoped>
.text-increase-on-hover {
    transition: transform 0.3s ease;
  }

  .text-increase-on-hover:hover {
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }
</style>