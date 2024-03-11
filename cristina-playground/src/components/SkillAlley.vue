<template>
<div class="flex justify-center items-center h-[100vh]"  id="skills">
    <div class="flex flex-col items-center justify-center">
        <div class="flex text-2xl justify-center font-bold items-center text-dark-indigo dark:text-white mt-6 w-[500px]">
            Achievements
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
            </svg>
        </div>
        <DotsDivider :dots="10" class="justify-center mb-5"/>

        <div class="font-bold items-center text-dark-indigo dark:text-white mt-1">
            <span class="text-1xl">AIESEC Volunteer</span>
            <div class="font-normal w-[500px]">
                I was an AIESEC volunteer both in <span class="font-semibold">Romania and Turkey</span>. I developed my team-player ability by working with people from different fields and countries. I practised my presentation and public speaking skills while boosting my English level.
            </div>
        </div>
        <div class="font-bold items-center text-dark-indigo dark:text-white mt-3 pb-10">
            <span class="text-1xl">Odin AI</span>
             <div class="font-normal w-[500px]">
                My team developed a start-up idea that integrates an <span class="font-semibold">AutoML system</span> in a responsive Angular web application to provide easy access for people without any technical background. We were involved in all stages of star-up development and placed 7 out of 145 teams in the <span class="font-semibold">FIX Cluj</span> contest.
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center ml-10">
        <div class="flex text-2xl font-bold items-center justify-center text-dark-indigo dark:text-white mt-6 w-[500px]">
            Aptitudes
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-2">
                <path fill-rule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>
        </div>

         <DotsDivider :dots="8" class="justify-center mb-5"/>

        <div class="font-bold items-center text-dark-indigo dark:text-white mt-1 mb-5">
            <span class="text-1xl">Soft Capapilities</span>
            <div class="font-normal w-[500px] mt-5">
                 <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-white font-medium px-5 bg-sky-blue dark:border-solid dark:border-white dark:border-2 dark:bg-transparent dark:text-white">
                    <span class="text-sm">Easily Adaptable</span>
                </span>

                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-white font-medium px-5 bg-sky-blue dark:border-solid dark:border-white dark:border-2 dark:bg-transparent dark:text-white">
                    <span class="text-sm">Creative</span>
                </span>

                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-white font-medium px-5 bg-sky-blue dark:border-solid dark:border-white dark:border-2 dark:bg-transparent dark:text-white">
                    <span class="text-sm">Solution-Oriented</span>
                </span>
            </div>
            <div class="font-normal w-[500px] mt-5">
                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-white font-medium px-5 bg-sky-blue dark:border-solid dark:border-white dark:border-2 dark:bg-transparent dark:text-white">
                    <span class="text-sm">Critical Thinker</span>
                </span>
                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-white font-medium px-5 bg-sky-blue dark:border-solid dark:border-white dark:border-2 dark:bg-transparent dark:text-white">
                    <span class="text-sm">Team-Player</span>
                </span>
            </div>
        </div>
        <div class="font-bold items-center text-dark-indigo dark:text-white mt-3 pb-10">
            <span class="text-1xl">Technical Skills</span>
             <div class="font-normal w-[500px] mt-5">
                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-sky-blue font-medium px-5 pt-1.5 pb-1.5 bg-white border-solid border-sky-blue border-2 dark:bg-white dark:text-coral dark:border-none">
                    <span class="text-sm">.NET</span>
                </span>

                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-sky-blue font-medium px-5 pt-1.5 pb-1.5 bg-white border-solid border-sky-blue border-2 dark:bg-white dark:text-coral dark:border-none">
                    <span class="text-sm">Angular</span>
                </span>

                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-sky-blue font-medium px-5 pt-1.5 pb-1.5 bg-white border-solid border-sky-blue border-2 dark:bg-white dark:text-coral dark:border-none">
                    <span class="text-sm">SQL</span>
                </span>

                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-sky-blue font-medium px-5 pt-1.5 pb-1.5 bg-white border-solid border-sky-blue border-2 dark:bg-white dark:text-coral dark:border-none">
                    <span class="text-sm">Neo4j</span>
                </span>

                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-sky-blue font-medium px-5 pt-1.5 pb-1.5 bg-white border-solid border-sky-blue border-2 dark:bg-white dark:text-coral dark:border-none">
                    <span class="text-sm">Python</span>
                </span>
            </div>
            <div class="font-normal w-[500px] mt-5">
               

                <span class="px-3 py-1 m-2 rounded-md shadow-sm ring ring-transparent text-sky-blue font-medium px-5 pt-1.5 pb-1.5 bg-white border-solid border-sky-blue border-2 dark:bg-white dark:text-coral dark:border-none">
                    <span class="text-sm">NLP</span>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import DotsDivider from './DotsDivider.vue'

export default {
  name: 'SkillAlley',
  components: {   
    DotsDivider
  },
}
</script>

<style scoped>

</style>
