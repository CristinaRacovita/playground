<template>
<div class="flex gap-2 pt-3 items-center">
    <!-- eslint-disable-next-line -->
    <div v-for="n in dots" class="w-3 h-3 rounded-full dark:bg-coral bg-sky-blue animate-bounce" :class=getDelay(n)></div>
</div>
</template>

<script>
export default {
    name: 'DotsDivider',
    props: {
        dots: Number
    },
    methods: {
        getDelay(delay) {
            return {
                2: `animate-delay-[500ms]`,
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
                13: 'animate-delay-[1600ms]',
                14: 'animate-delay-[1700ms]',
                15: 'animate-delay-[1800ms]',
                16: 'animate-delay-[1900ms]',
                17: 'animate-delay-[2000ms]',
                18: 'animate-delay-[2100ms]',
                19: 'animate-delay-[2200ms]',
                20: 'animate-delay-[2300ms]'
            } [delay]
        }
    }
}
</script>

<style scoped>

</style>
