<template>
  <div class="relative">
    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- sidebar-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <SideBar/>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- side menu-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <div>
      <!-- styling for side menu-->
      <slot name="sideMenu"></slot>
    </div>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- main content-->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <div class="main-content dark:bg-discord-black-300 min-h-screen bg-gray-50">
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
        <LightBulbIconSolid v-if="darkMode" class="h-9"/>
        <LightBulbIconOutline v-else class="h-9"/>
        <!--      Turn {{ darkMode ? 'on' : 'off' }} the lights-->
        <span class="flex h-4 w-4 absolute top-0 -right-1">
        <span
            class="absolute inline-flex h-4 w-4 rounded-full dark:bg-gray-300 bg-purple-400 opacity-75"
            :class="[animate ? 'animate-ping' :'']"></span>
        <span class="h-4 w-4 dark:bg-gray-300 bg-purple-400 rounded-full"></span>
      </span>
        <small class="hidden group-hover:block">Turn {{ darkMode ? 'on' : 'off' }} the lights 😀</small>
      </button>
    </div>

  </div>
</template>

<script lang="ts" setup>
import SideBar from "@/app/common/components/layouts/SideBar.vue";
import SideMenu from "@/app/common/components/layouts/SideMenu.vue";

import {LightBulbIcon as LightBulbIconOutline} from '@heroicons/vue/outline';
import {LightBulbIcon as LightBulbIconSolid} from '@heroicons/vue/solid';
import {ref} from "vue";

// window.matchMedia('(prefers-color-scheme: dark)').matches
let darkMode = ref<boolean>(true);
// turn dark mode on if it is system enabled
if (darkMode.value) document.documentElement.classList.add('dark')

const animate = ref<boolean>(true)

/**
 * toggle dark mode
 */
const toggleDarkMode = () => {
  animate.value = false
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark')
}

</script>

<style>
.main-content {
  margin-left: 312px;
}
</style>
