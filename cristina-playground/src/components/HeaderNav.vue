<template>
  <header class="bg-white dark:bg-dark-indigo rounded-b-lg shadow-md" id="home">
    <div class="flex justify-between items-center p-2">
      <nav class="flex flex-grow justify-evenly px-52" aria-label="Global">
        <a class="text-ml font-bold hover:font-extrabold leading-6 text-dark-indigo dark:text-white text-increase-on-hover cursor-pointer" @click="scrollToSection('MeetMe')">Meet Me</a>
        <a class="text-ml font-bold hover:font-extrabold leading-6 text-dark-indigo dark:text-white text-increase-on-hover cursor-pointer" @click="scrollToSection('skills')">Aptitude Alley</a>
        <a class="text-ml font-bold hover:font-extrabold leading-6 text-dark-indigo dark:text-white text-increase-on-hover cursor-pointer" @click="scrollToSection('projects')">Portfolio Parade</a>
        <a class="text-ml font-bold hover:font-extrabold leading-6 text-dark-indigo dark:text-white text-increase-on-hover cursor-pointer" @click="scrollToSection('ask-me')">Ask Cristina</a>
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
  },
  methods: {
    scrollToSection(id) {
        const position = document.getElementById(id).offsetTop;
        window.scrollTo({ top: position, behavior: "smooth" });  
    }
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