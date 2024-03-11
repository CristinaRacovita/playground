<template>
<div v-show="isMobile()" class="flex justify-center flex-col text-dark-indigo items-center font-bold h-screen"> <img class="w-64 rounded-full" src="@/assets/avatar-sad.png" /> This website is not available on mobile yet.</div>
<div v-show="!isMobile()" class="dark:bg-black h-fit flex flex-col justify-between" id="content">
    <HeaderNav />
    <HeroSection />
    <MeetMe id="MeetMe" />
    <HobbyPit />
    <SkillAlley />
    <MyProjects />
    <AskMe />
    <AppFooter />
    <BottomArrow />
</div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import MeetMe from './components/MeetMe.vue'
import SkillAlley from './components/SkillAlley.vue'
import MyProjects from './components/MyProjects.vue'
import AskMe from './components/AskMe.vue'
import AppFooter from './components/AppFooter.vue'
import BottomArrow from './components/BottomArrow.vue'
import HobbyPit from './components/HobbyPit.vue'

export default {
    name: 'App',
    components: {
        HeaderNav,
        HeroSection,
        MeetMe,
        SkillAlley,
        MyProjects,
        AskMe,
        AppFooter,
        BottomArrow,
        HobbyPit
    },
    methods: {
        isMobile() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    }
}
</script>

<style>
</style>
