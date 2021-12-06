<template>
  <div class="relative">
    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- mobile placeholder-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <div class="dark:bg-discord-black-500 h-screen w-full lg:hidden bg-gray-100">
      <div class="flex w-full flex justify-center">
        <img src="/images/placeholders/discord-logo.png" class="animate-pulse" width="200" height="200">
      </div>

      <div class="text-center mx-10">
        <h1 class="text-discord-black-60 text-2xl">Too bad 😩, the mobile version is not ready yet.</h1>
        <h1 class="text-discord-black-60 text-xl mt-10">
          It needs some work, but its sure coming 😀,I will surely update on my socials once ready.
        </h1>
        <h1 class="text-discord-black-60 text-xl mt-10">
          <span class="mr-2">@linkedin:</span>
          <a href="https://www.linkedin.com/in/pickman-murimi/"
                        class="px-5 py-0.5 border dark:border-gray-700 border-gray-300 hover:shadow rounded"> Pickman Murimi </a>
        </h1>
      </div>

      <div class="flex w-full flex justify-center mt-10 text-discord-black-60 text-xl">
        <span class="mr-2">Check out my portfolio</span>
        <a href="https://irup.io" class="px-5 py-0.5 border dark:border-gray-700 border-gray-300 hover:shadow rounded">
          irup.io
        </a>
      </div>
    </div>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- sidebar-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <SideBar class="hidden md:block"/>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- side menu-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <div class="hidden md:block">
      <!-- styling for side menu-->
      <slot name="sideMenu"></slot>
    </div>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- main content-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <div class="main-content dark:bg-discord-black-300 min-h-screen bg-gray-50 h-screen overflow-hidden hidden md:block">
      <div class="w-full shadow" style="height: 48px">
        <slot name="topNav">
        </slot>
      </div>

      <slot></slot>
    </div>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- dark mode toggle-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <div class="fixed group bottom-0 right-0 m-4 z-30">
      <button @click="toggleDarkMode"
              class="flex items-center text-xl relative border p-2 dark:border-gray-500
            bg-gray-50 dark:bg-discord-black-500
            border-purple-200 rounded-full text-primary dark:text-gray-300 font-medium">
        <BulbIcon class="h-9"/>
        <!--      Turn {{ darkMode ? 'on' : 'off' }} the lights-->
        <span class="flex h-4 w-4 absolute top-0 -right-1">
        <span
            class="absolute inline-flex h-4 w-4 rounded-full dark:bg-gray-300 bg-purple-400 opacity-75"
            :class="[animate ? 'animate-ping' :'']"></span>
        <span class="h-4 w-4 dark:bg-gray-300 bg-purple-400 rounded-full"></span>
      </span>
        <small class="hidden group-hover:block">Turn {{ darkMode ? 'on' : 'off' }} the lights 💡</small>
      </button>
    </div>

  </div>
</template>

<script lang="ts" setup>
import SideBar from "@/app/common/components/layouts/SideBar.vue";

import {ref} from "vue";
import BulbIcon from "@/app/common/components/icons/BulbIcon.vue";

// window.matchMedia('(prefers-color-scheme: dark)').matches

if (localStorage.getItem('darkmode') === null) localStorage.setItem('darkmode', 'true')

let darkMode = ref<boolean>(localStorage.getItem('darkmode') === 'true');
// turn dark mode on if it is system enabled
if (darkMode.value) document.documentElement.classList.add('dark')

const animate = ref<boolean>(true)

/**
 * toggle dark mode
 */
const toggleDarkMode = () => {
  animate.value = false
  darkMode.value = !darkMode.value;
  (darkMode.value) ? localStorage.setItem('darkmode', 'true') : localStorage.removeItem('darkmode');
  document.documentElement.classList.toggle('dark')
}

</script>

<style>
.main-content {
  margin-left: 312px;
}
</style>
