<template>


<footer class="bg-light-blue dark:bg-dark-indigo rounded shadow-inner">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between font-light">
      <span class="text-sm text-dark-indigo sm:text-center dark:text-white">© 2024 <a href="https://flowbite.com/" class="hover:underline">Cristina's Playground</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-dark-indigo dark:text-white sm:mt-0">
        <a class="me-4 md:me-6 cursor-pointer text-increase-on-hover hover:font-bold" @click="scrollToSection('home')">Home</a>
        <a class="me-4 md:me-6 cursor-pointer text-increase-on-hover hover:font-bold" @click="scrollToSection('MeetMe')">Meet Me</a>

        <a class="me-4 md:me-6 cursor-pointer text-increase-on-hover hover:font-bold" @click="scrollToSection('skills')">Aptitude Alley</a>

        <a class="me-4 md:me-6 cursor-pointer text-increase-on-hover hover:font-bold" @click="scrollToSection('projects')">Portfolio Parade</a>

        <a class="cursor-pointer text-increase-on-hover hover:font-bold" @click="scrollToSection('ask-me')">Ask Cristina</a>
    </ul>
    </div>
</footer>


</template>

<script>
export default {
    name: 'AppFooter',
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
