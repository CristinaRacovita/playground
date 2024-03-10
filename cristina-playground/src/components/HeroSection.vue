<template>
<div class="flex justify-center mt-10">
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
