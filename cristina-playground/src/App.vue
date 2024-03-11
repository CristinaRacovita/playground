<template>
<div class="dark:bg-black h-fit flex flex-col justify-between" id="content">
  <HeaderNav />
  <HeroSection />
  <MeetMe id="MeetMe" />
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
    BottomArrow
  }
}
</script>

<style>
</style>
