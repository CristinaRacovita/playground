<template>
<div class="dark:bg-black" style="height:100vh">
  <HeaderNav />
  <HeroSection />
</div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    HeroSection
  }
}
</script>

<style>
</style>
