<template>
<div class="flex flex-col justify-center h-[100vh]" id="hobbies">
    <div class="flex justify-center text-2xl font-bold text-dark-indigo dark:text-white items-center">Hobby Pit
        <svg fill="currentColor" class="w-6 h-6 ml-1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 394.42 394.42" xml:space="preserve">
            <g>
                <g>
                    <path d="M197.209,0C127.862,0,71.646,56.217,71.646,125.563c0,1.383,0.051,2.789,0.149,4.215
                        c5.703-7.066,13.173-12.586,24.168-12.586c18.294,0,26.836,15.273,33.702,27.545c6.731,12.034,10.594,17.703,16.917,17.703
                        c6.324,0,10.187-5.669,16.917-17.703c6.865-12.271,15.408-27.545,33.702-27.545s26.837,15.273,33.703,27.545
                        c6.73,12.034,10.596,17.703,16.919,17.703s10.187-5.669,16.917-17.703c6.865-12.271,15.408-27.545,33.703-27.545
                        c11.004,0,18.477,5.527,24.182,12.6c0.098-1.432,0.15-2.842,0.15-4.229C322.774,56.217,266.556,0,197.209,0z" />
                    <path d="M298.442,136.423c-6.324,0-10.188,5.669-16.918,17.703c-6.863,12.272-15.408,27.545-33.701,27.545
                        c-18.295,0-26.838-15.272-33.703-27.545c-6.73-12.034-10.595-17.703-16.918-17.703c-6.324,0-10.187,5.669-16.917,17.703
                        c-6.865,12.272-15.407,27.545-33.702,27.545c-18.293,0-26.836-15.273-33.701-27.545c-6.731-12.034-10.594-17.703-16.917-17.703
                        c-6.323,0-10.188,5.669-16.919,17.703c-0.397,0.711-0.802,1.433-1.212,2.161c15.044,42.502,54.487,95.742,83.947,142.576h70.86
                        c29.458-46.829,68.896-100.063,83.944-142.565c-0.414-0.73-0.82-1.457-1.219-2.172
                        C308.632,142.092,304.769,136.423,298.442,136.423z" />
                    <path d="M148.255,324.633v53.333c0,9.073,7.381,16.454,16.453,16.454h65.001c9.072,0,16.453-7.381,16.453-16.454v-53.333H148.255z
                        " />
                </g>
            </g>
        </svg>
    </div>
    <DotsDivider :dots="8" class="justify-center mb-5" />
    <div class="flex justify-center items-center mb-10">
        <div class="dark:text-white text-dark-indigo dark:font-normal font-medium w-[500px] text-center">
            Explore my diverse interests and passions, from being creative to exploring outdoors, and step into my world beyond coding.
        </div>
    </div>
    <div class="flex justify-center items-center">
        <div class="flex justify-evenly items-center flex-col h-[50vh]">
            <div class="flex justify-center flex-col items-center font-bold text-ml dark:text-coral text-dark-indigo mb-5 w-[200px] text-center">
                <img class="w-16 rounded-full mr-2 hover:scale-[3]" src="@/assets/cycling.jpeg" /> Cycling Enthusiasm
                <span class="font-light dark:text-white">&nbsp; When I ride my bike all the problems go away </span>
            </div>
            <div class="flex justify-center flex-col items-center font-bold text-ml dark:text-coral text-dark-indigo mb-5 w-[200px] text-center">
                <img class="w-16 rounded-full mr-2 hover:scale-[3]" src="@/assets/travelling.jpeg" /> Adventure Seeker
                <span class="font-light dark:text-white text-dark-indigo">&nbsp; Walking 20 km per day when I'm on holiday is a must! </span>
            </div>
        </div>

        <div class="self-center justify-center items-center px-20">
            <img class="w-96 rounded-full" src="@/assets/avatar-bike-cool.png" />
        </div>

        <div class="flex justify-evenly items-center flex-col h-[50vh]">
            <div class="flex justify-center flex-col items-center font-bold text-ml dark:text-coral text-dark-indigo mb-5 w-[200px] text-center">
                <img class="w-16 rounded-full mr-2 hover:scale-[3]" src="@/assets/festivals.jpeg" /> Festival Amateur
                <span class="font-light dark:text-white">&nbsp; I'm not gonna say no to a crazy night </span>
            </div>
            <div class="flex justify-center flex-col items-center font-bold text-ml dark:text-coral text-dark-indigo mb-5 w-[200px] text-center">
                <img class="w-16 rounded-full mr-2 hover:scale-[3]" src="@/assets/piano.jpeg" /> Music Addict
                <span class="font-light dark:text-white text-dark-indigo">&nbsp; My artistic background allowed me to experience playing piano and flute </span>
            </div>
        </div>

    </div>
    <div class="flex justify-center flex-col items-center mt-10">
        <div class="flex justify-center flex-col items-center font-bold text-ml dark:text-coral text-dark-indigo mb-5 w-[200px] text-center">
            <img class="w-16 rounded-full mr-2 hover:scale-[3]" src="@/assets/alfie.jpeg" /> Animal Lover
            <span class="font-light dark:text-white text-dark-indigo">&nbsp; My dog made me write this </span>
        </div>
    </div>
</div>
</template>

<script>
import DotsDivider from './DotsDivider.vue'
export default {
    name: 'HobbyPit',
    components: {
        DotsDivider
    }
}
</script>

<style scoped>

</style>
