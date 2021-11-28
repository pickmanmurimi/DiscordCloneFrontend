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
          <router-link :to="{ name: 'Friends'}" class="sidemenu-item-active sidemenu-item">
            <FriendsIcon class="mr-4" />
            <span class="font-medium">Friends</span>
          </router-link>
        </li>
        <!--    nitro-->
        <li class="sidemenu-items flex items-center">
          <a class="sidemenu-item" href="#">
            <NitroIcon class="mr-4" />
            <span class="font-medium">Nitro</span>
          </a>
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
        <li class="flex mb-0.5 items-center dark:hover:bg-discord-black-200 hover:bg-gray-100
       p-1 rounded cursor-pointer group relative">
          <div class="mr-3 relative">
            <img alt="irup io logo" class="object-cover w-full h-full dm-thumbnail rounded-full
           border border-gray-300 group-hover:border-0"
                 src="@assets/placeholders/tailwind.png">
            <span class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
            <span class="status-indicator bg-green-400 rounded-full"></span>
          </span>
          </div>
          <div>
            <span class="text-sm block text-gray-400 font-medium menu-item-title group-hover:text-gray-500 dark:group-hover:text-gray-200">Tailwind</span>
            <small class="text-xs block text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-100">In the mood for a hug</small>
          </div>
          <span class="group-hover:block hidden hover:text-gray-200 absolute right-0 text-gray-400 mr-1">
          <CloseIcon class="icon-16"/>
        </span>
        </li>

        <!--      message 2-->
        <li class="flex mb-0.5 items-center dark:hover:bg-discord-black-200 hover:bg-gray-100
       p-1 rounded cursor-pointer group relative">
          <div class="mr-3 relative">
            <img alt="irup io logo" class="object-cover w-full h-full dm-thumbnail rounded-full bg-gray-50
          border border-gray-300 group-hover:border-0"
                 src="@assets/placeholders/discord-logo.png">
            <span class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
            <span class="status-indicator bg-green-400 rounded-full"></span>
          </span>
          </div>
          <div>
            <span class="text-sm text-gray-400 font-medium menu-item-title group-hover:text-gray-500 dark:group-hover:text-gray-200">CedricPotato</span>
          </div>
          <span class="group-hover:block hidden hover:text-gray-200 absolute right-0 text-gray-400 mr-1">
          <CloseIcon class="icon-16"/>
        </span>
        </li>

        <!--      message 3-->
        <li class="flex mb-0.5 items-center dark:hover:bg-discord-black-200 hover:bg-gray-100
       p-1 rounded cursor-pointer group relative">
          <div class="mr-3 relative">
            <img alt="irup io logo" class="object-cover w-full h-full dm-thumbnail rounded-full bg-gray-50
          border border-gray-300 group-hover:border-0"
                 src="@assets/placeholders/icons8-discord-50.png">
            <span class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
            <span class="status-indicator bg-green-400 rounded-full"></span>
          </span>
          </div>
          <div>
            <span class="text-sm text-gray-400 font-medium menu-item-title group-hover:text-gray-500 dark:group-hover:text-gray-200">iam.tony</span>
          </div>
          <span class="group-hover:block hidden hover:text-gray-200 absolute right-0 text-gray-400 mr-1">
          <CloseIcon class="icon-16"/>
        </span>
        </li>


        <!--      message 4-->
        <li class="flex mb-0.5 items-center dark:hover:bg-discord-black-200 hover:bg-gray-100
       p-1 rounded cursor-pointer group relative">
          <div class="mr-3 relative">
            <img alt="irup io logo" class="object-cover w-full h-full dm-thumbnail rounded-full bg-gray-50
          border border-gray-300 group-hover:border-0"
                 src="@assets/placeholders/logosmalltransparent.png">
            <span class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
            <span class="status-indicator bg-green-400 rounded-full"></span>
          </span>
          </div>
          <div>
            <span class="text-sm text-gray-400 font-medium menu-item-title group-hover:text-gray-500 block dark:group-hover:text-gray-100">Nova.</span>
            <small class="text-xs block text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-100">https://irup.io</small>
          </div>
          <span class="group-hover:block hidden hover:text-gray-200 absolute right-0 text-gray-400 mr-1">
          <CloseIcon class="icon-16"/>
        </span>
        </li>

      </ul>
    </div>

    <!--    user profile-->
    <div class="py-2 px-3 dark:bg-discord-black-500 bg-gray-300">
      <div class="flex items-center">
        <div class="mr-3 flex items-center">
          <!-- profile picture-->
          <div class="relative">
            <img alt="irup io logo" class="object-cover w-full h-full dm-thumbnail rounded-full
           border border-gray-300 group-hover:border-0"
                 src="@assets/placeholders/tailwind.png">
            <span class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
              <span class="status-indicator bg-green-400 rounded-full"></span>
            </span>
          </div>

          <!-- username -->
          <div class="ml-2">
            <span class="font-bold text-xs dark:text-white block text-gray-600 profile-name">optimus_murimi</span>
            <small class="text-xs dark:text-gray-400 text-gray-700 profile-hash">#8580</small>
          </div>
        </div>

      </div>
    </div>

  </nav>

</template>
<script lang="ts" setup>
import FriendsIcon from "@/app/common/components/icons/FriendsIcon.vue";
import NitroIcon from "@/app/common/components/icons/NitroIcon.vue";
import PlusIcon from "@/app/common/components/icons/PlusIcon.vue";
import CloseIcon from "@/app/common/components/icons/CloseIcon.vue";

</script>

<style>
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

.sidemenu-item {
  @apply w-full h-full rounded flex items-center px-2 text-gray-400;
}

.sidemenu-item-active {
  @apply dark:text-gray-50 dark:bg-discord-black-200 bg-gray-100 text-gray-600;
}

.dm-thumbnail {
  height: 32px;
  width: 32px;
}

.status-indicator-wrapper {
  width: 14px;
  height: 14px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.status-indicator {
  width: 9px;
  height: 9px;
}

.profile-name {
  line-height: 3px !important;
}
.menu-item-title {
  line-height: 10px!important;
}

.profile-hash {
  line-height: 0 !important;
}
</style>
