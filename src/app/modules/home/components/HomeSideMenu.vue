<template>
  <nav class="min-h-screen absolute sidemenu dark:bg-discord-black-400 bg-gray-200 flex flex-col justify-between">
    <div>
      <!--    search bar-->
      <div class="sidemenu-title flex items-center shadow">
        <button class="searchbar-btn font-medium" type="button">
          Find or start a conversation
        </button>
      </div>

      <!--    sidemenu-items-->
      <ul class="mt-2 sidemenu-px-10">
        <!--    friends-->
        <li class="sidemenu-items flex items-center">
          <router-link :class="{ 'sidemenu-item-active' : route.name === 'Friends'}" :to="{ name: 'Friends'}"
                       class="sidemenu-item">
            <FriendsIcon class="mr-4"/>
            <span class="font-medium">Friends</span>
          </router-link>
        </li>
        <!--    nitro-->
        <li class="sidemenu-items flex items-center">
          <router-link :class="{ 'bg-gradient-to-r from-indigo-500 to-blue-400' : route.name === 'Nitro'}"
                       :to="{ name: 'Nitro'}"
                       class="sidemenu-item">
            <NitroIcon :class="{'text-white' : route.name === 'Nitro'}" class="mr-4"/>
            <span :class="{'text-white' : route.name === 'Nitro'}" class="font-medium">Nitro</span>
          </router-link>
        </li>
      </ul>

      <!--    direct messages-->
      <div class="flex justify-between mt-5 pl-3 pr-3 text-xs text-gray-400 font-medium">
        <h4>DIRECT MESSAGES</h4>
        <PlusIcon class="icon-16"/>
      </div>

      <!--    messages-->
      <ul class="pl-3 pr-3 mt-3">
        <!--      message 1-->
        <li v-for="dm in DirectMessages" :key="dm.name" class="flex mb-0.5 items-center dark:hover:bg-discord-black-200 hover:bg-gray-100
       p-1 rounded cursor-pointer group relative">
          <div class="mr-3 relative">
            <img :alt="dm.name" :src="dm.image"
                 class="object-cover w-full h-full dm-thumbnail
                 rounded-full border border-discord-black-300 group-hover:border-0">
            <span v-if="dm.online" class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
              <span class="status-indicator bg-green-400 rounded-full"></span>
            </span>
          </div>
          <div>
            <span
                class="text-sm block text-gray-400 font-medium menu-item-title group-hover:text-gray-500 dark:group-hover:text-gray-200">
              {{ dm.name }}
            </span>
            <small v-if="dm.tagline"
                   class="text-xs block text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-100">
              {{ dm.tagline }}
            </small>
          </div>
          <span class="group-hover:block hidden hover:text-gray-200 absolute right-0 text-gray-400 mr-1">
          <CloseIcon class="icon-16"/>
        </span>
        </li>

      </ul>
    </div>

    <!--    user profile-->
    <div class="py-2 px-2 dark:bg-discord-black-500 bg-gray-300 profile flex items-center justify-between">
        <!--        profile details-->
        <div class="mr-3 flex items-center">
          <!-- profile picture-->
          <div class="relative">
            <img alt="irup io logo" class="object-cover min-w-full min-h-full dm-thumbnail rounded-full
           border border-gray-300 group-hover:border-0 bg-white"
                 src="/images/placeholders/logosmalltransparent.png">
            <span class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
              <span class="status-indicator bg-green-400 rounded-full"></span>
            </span>
          </div>

          <!-- username -->
          <div class="ml-2">
            <span class="font-bold text-xs dark:text-white block text-gray-600 profile-name">optimus_m...</span>
            <small class="text-xs dark:text-gray-400 text-gray-700 profile-hash">#8580</small>
          </div>
        </div>

      <!--        actions-->
      <div class="flex items-center dark:text-gray-400 text-gray-700 space-x-1">
        <button class="dark:hover:bg-gray-700 hover:bg-gray-100 p-1 rounded">
          <MicIcon/>
        </button>
        <button class="dark:hover:bg-gray-700 hover:bg-gray-100 p-1 rounded">
          <HeadPhonesIcon/>
        </button>
        <button class="dark:hover:bg-gray-700 hover:bg-gray-100 p-1 rounded">
          <GearsIcon/>
        </button>
      </div>
    </div>

  </nav>

</template>
<script lang="ts" setup>
import FriendsIcon from "@/app/common/components/icons/FriendsIcon.vue";
import NitroIcon from "@/app/common/components/icons/NitroIcon.vue";
import PlusIcon from "@/app/common/components/icons/PlusIcon.vue";
import CloseIcon from "@/app/common/components/icons/CloseIcon.vue";
import {useRoute} from "vue-router";
import DirectMessages from "@/app/common/data/directMessages.json"
import MicIcon from "@/app/common/components/icons/MicIcon.vue";
import HeadPhonesIcon from "@/app/common/components/icons/HeadPhonesIcon.vue";
import GearsIcon from "@/app/common/components/icons/GearsIcon.vue";

const route = useRoute();

</script>

<style scoped>
.sidemenu {
  width: 240px;
  margin-left: 72px;
}

.sidemenu-title {
  height: 48px;
  padding-left: 10px;
  padding-right: 10px;
}

.sidemenu-items {
  height: 42px;
}

.sidemenu-px-10 {
  padding-right: 10px;
  padding-left: 10px;
}

.profile {
  height: 52px;
}

.sidemenu-item {
  @apply w-full h-full rounded flex items-center px-2 text-gray-400;
}

.sidemenu-item-active {
  @apply dark:text-gray-50 dark:bg-discord-black-200 bg-gray-100 text-gray-600;
}

.dm-thumbnail {
  height: 35px !important;
  width: 35px !important;
}

.profile-name {
  line-height: 3px !important;
}

.menu-item-title {
  line-height: 10px !important;
}

.profile-hash {
  line-height: 0 !important;
}
</style>
