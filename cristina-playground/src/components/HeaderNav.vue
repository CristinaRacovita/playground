<template>
  <header class="bg-white dark:bg-dark-indigo rounded-b-lg shadow-md">
    <div class="flex justify-between items-center p-3">
    <!-- <div>
      <img class="w-56" src="@/assets/two-clouds.png" />
    </div> -->
    
      <nav class="flex flex-grow justify-evenly px-52" aria-label="Global">
        <a href="#" class="text-ml font-normal hover:font-bold leading-6 text-sky-blue dark:text-white text-increase-on-hover">About Me</a>
        <a href="#" class="text-ml font-normal hover:font-bold leading-6 text-sky-blue dark:text-white text-increase-on-hover">My Projects</a>
        <a href="#" class="text-ml font-normal hover:font-bold leading-6 text-sky-blue dark:text-white text-increase-on-hover">Let's Connect</a>
      </nav>
      <div class="mr-2.5">
        <ThemeToggle />
      </div>
    </div>
</header>

</template>

<script>
import ThemeToggle from './ThemeToggle.vue'

export default {
  name: 'HeaderNav',
  components: {   
    ThemeToggle
  }
}
</script>

<style scoped>
.text-increase-on-hover {
    transition: transform 0.3s ease;
}

.text-increase-on-hover:hover {
    transform: scale(1.1); 
}
</style>