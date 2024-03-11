<template>
<div class="flex justify-center h-[100vh]">
    <div class="self-center">
        <img class="w-96 rounded-full" src="@/assets/avatar-1-1.png" />
    </div>
    <div class="dark:text-white flex flex-col self-center">
        <div class="font-bold relative w-[max-content] text-2xl before:absolute before:inset-0 before:animate-typewriter dark:text-white text-dark-indigo before:bg-white dark:before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-dark-indigo"> Welcome to my digital playground! </div>
        <DotsDivider :dots="12" class="justify-between" />
        <div class="mt-6 dark:text-white text-dark-indigo w-96 text-1xl"> Hi, I'm <span class="font-extrabold">Cristina</span> - lovely to meet you! Meet my cozy internet corner where every scroll reveals something about myself.  </div>
        <div class="mt-3 font-light dark:text-white text-dark-indigo"> Feel free to stay a while and explore! </div>
        <button @click="scrollToAboutMePage()" id="explore" class="bg-sky-blue dark:bg-transparent dark:hover:bg-coral hover:opacity-80 dark:text-white dark:border dark:border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center w-fit mt-3"> Explore
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
        </button>
    </div>
</div>
</template>

<script>
import DotsDivider from './DotsDivider.vue'

export default {
  name: 'HeroSection',
  components: {   
    DotsDivider
  },
  methods: {
    scrollToAboutMePage() {
        const position = document.getElementById("MeetMe").offsetTop;
        window.scrollTo({ top: position, behavior: "smooth" });  
    }
  }
}
</script>

<style scoped>

</style>
