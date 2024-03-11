<template>
<div class="h-[100vh] bg-light-purple dark:bg-black-grey flex flex-col justify-center" id="projects"> 
    <div class="flex justify-center text-2xl font-bold text-dark-indigo dark:text-white items-center">Portofolio Parade
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1">
            <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
        </svg>
    </div>
    <DotsDivider :dots="12" class="justify-center"/>
 

    <div class="flex flex-col items-center justify-center">
       <div class="font-1xl font-medium w-[800px] mt-10 mb-5 text-dark-indigo dark:text-white"> Welcome to my projects parade, where technical skills meet creativity. Dive into a collection of my latest endeavors, where each project tells a unique story of problem-solving. </div>
        <div
            class="w-[900px] justify-center grid mt-2 divide-x divide-y  divide-dark-indigo dark:divide-coral overflow-hidden rounded-3xl border-2 text-gray-600 border-dark-indigo dark:border-coral sm:grid-cols-2 lg:grid-cols-5  lg:divide-y-0 xl:grid-cols-5">
            <div class="group bg-sky-blue-light dark:bg-coral-light transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10 cursor-pointer">
                <div class="space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style="color:transparent">
                <div class="space-y-2">
                    <h5 class="text-xl font-bold text-white transition group-hover:text-secondary dark:text-coral-dark">Xyz.com</h5>
                    <p class="text-dark-indigo dark:text-coral-dark">Platform to convert Domains into Content websites.</p>
                </div>
                </div>
            </div>
            <div class="group bg-sky-blue-light dark:bg-coral-light transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div class="space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style="color:transparent" >
                <div class="space-y-2">
                    <h5 class="text-xl font-bold text-white transition group-hover:text-secondary dark:text-coral-dark">ABC.com</h5>
                    <p class="text-dark-indigo dark:text-coral-dark">Platform to create dynamic widgets for websites.</p>
                </div>
                </div>
            </div>
            <div class="group bg-sky-blue-light dark:bg-coral-light transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div class="space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style="color:transparent" >
                <div class="space-y-2">
                    <h5 class="text-xl font-bold text-white transition group-hover:text-secondary dark:text-coral-dark">ASD.com</h5>
                    <p class="text-dark-indigo dark:text-coral-dark">API SaaS Platform that provides API Suit to help you ship fast.</p>
                </div>
                </div>
            </div>
            <div class="group bg-sky-blue-light dark:bg-coral-light transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div class="space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style="color:transparent">
                <div class="space-y-2">
                    <h5 class="text-xl font-bold text-white transition group-hover:text-secondary dark:text-coral-dark">TMK.co</h5>
                    <p class="text-dark-indigo dark:text-coral-dark">Chrome Extension that lets you add ChatGPT on any website</p>
                </div>
                </div>
            </div>
            <div class="group bg-sky-blue-light dark:bg-coral-light transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div class="space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/120854/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style="color:transparent">
                <div class="space-y-2">
                    <h5 class="text-xl font-bold text-white transition group-hover:text-secondary dark:text-coral-dark">LMN.co</h5>
                    <p class="text-dark-indigo dark:text-coral-dark">Awesome Project for making pizza without any tool</p>
                </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import DotsDivider from './DotsDivider.vue'

export default {
  name: 'MyProjects',
  components: {   
    DotsDivider
  }
}
</script>

<style scoped>

</style>
