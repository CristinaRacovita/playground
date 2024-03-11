<template>
<div v-show="showButton" class="fixed bottom-10 mb-5 right-10" @click="scrollToHome()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-11 h-11 mr-10 hover:animate-bounce cursor-pointer fill-sky-blue dark:fill-coral">
        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
    </svg>
</div>
</template>

<script>
export default {
    name: 'BottomArrow',
    data() {
        return {
            showButton: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const triggerElementPosition = document.getElementById('MeetMe');
            this.showButton = triggerElementPosition.offsetHeight <= window.top.scrollY;
        },
        scrollToHome() {
            const position = document.getElementById('home').offsetTop;
            window.scrollTo({
                top: position,
                behavior: "smooth"
            });
        }
    }
}
</script>

<style scoped>

</style>
