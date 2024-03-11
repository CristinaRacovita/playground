<template>
<div class="dark:bg-black h-fit ">
  <HeaderNav />
  <HeroSection />
  <MeetMe />
  <SkillAlley />
  <MyProjects />
  <AskMe />
  <AppFooter />
  <!-- <div> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-9 h-9 absolute end-2.5 right-2.5 mr-10 fill-sky-blue hover:animate-bounce">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
    </svg>
  </div> -->

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

export default {
  name: 'App',
  components: {
    HeaderNav,
    HeroSection,
    MeetMe,
    SkillAlley,
    MyProjects,
    AskMe,
    AppFooter
  }
}
</script>

<style>
</style>
