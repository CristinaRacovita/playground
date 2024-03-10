<template>
<div class="dark:bg-black h-fit">
  <HeaderNav />
  <HeroSection />
  <AboutMe />
</div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue'


export default {
  name: 'App',
  components: {
    HeaderNav,
    HeroSection,
    AboutMe
  }
}
</script>

<style>
</style>
