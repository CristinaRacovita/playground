<template>
<div class="flex justify-center mt-20">
    <div>
        <img class="w-96 rounded-full" src="@/assets/avatar-1-1.png" />
    </div>
    <div class="dark:text-white flex flex-col self-center">
        <div class="font-bold relative w-[max-content] text-2xl before:absolute before:inset-0 before:animate-typewriter dark:text-white text-dark-indigo before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-dark-indigo"> Welcome to my digital playground! </div>
        <div class="flex justify-between gap-2 pt-3 items-center">
            <!-- eslint-disable-next-line -->
            <div  v-for="n in 12" class="w-3 h-3 rounded-full bg-sky-blue animate-bounce" :class=getDelay(n)></div>
        </div>
        <div class="mt-6 dark:text-white text-dark-indigo w-96 text-1xl"> Hi, I'm Cristina - lovely to meet you! Meet my cozy internet corner where every scroll reveals something about myself.  </div>
        <div class="mt-3 font-light dark:text-white text-dark-indigo"> Feel free to stay a while and explore! </div>
        <button class="bg-sky-blue dark:bg-transparent dark:hover:bg-sky-blue hover:opacity-80 dark:text-white dark:border dark:border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center w-fit mt-3"> Explore
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
        </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    getDelay(delay) {
        return {
            2: 'animate-delay-[500ms]',
            3: 'animate-delay-[600ms]',
            4: 'animate-delay-[700ms]',
            5: 'animate-delay-[800ms]',
            6: 'animate-delay-[900ms]',
            7: 'animate-delay-[1000ms]',
            8: 'animate-delay-[1100ms]',
            9: 'animate-delay-[1200ms]',
            10: 'animate-delay-[1300ms]',
            11: 'animate-delay-[1400ms]',
            12: 'animate-delay-[1500ms]',
        }[delay]
    }
  }
}
</script>

<style scoped>

</style>
