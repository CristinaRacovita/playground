<template>
<div class="flex justify-center">

    <div class="text-dark-indigo dark:text-white flex justify-center items-center flex-col h-[60vh]" id="ask-me">
        <div class="font-bold text-2xl flex justify-center items-center">
            Have a question
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="font-medium text-1xl w-[500px] text-center mt-5">
            Don't hesitate to reach out! Whether you're seeking advice, clarification, or simply want to start a conversation, feel free to drop me a line. Let's connect and explore together!
        </div>
        <div class="font-extrabold w-[500px] dark:text-coral text-center mt-5 flex justify-center items-center">
        LinkedIn
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-4 h-4 ml-1" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        <a href="https://www.linkedin.com/in/cristina-racovita/" class="font-normal ml-3"> cristina-racovita </a>
        </div>
         <div class="font-extrabold w-[500px] dark:text-coral text-center mt-1 flex justify-center items-center">
        Email
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg> <span class="font-normal ml-3"> cristina.racovita98@gmail.com </span>
        </div>
    </div>

    <div class="self-center">
        <img class="w-64 rounded-full" src="@/assets/avatar-without-dog.png" />
    </div>  
</div>
</template>

<script>
export default {
  name: 'AskMe'
}
</script>

<style scoped>

</style>
