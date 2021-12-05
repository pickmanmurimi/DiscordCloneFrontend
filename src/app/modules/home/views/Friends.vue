<template>
  <HomeLayout>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!-- Friends navigation -->
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <template v-slot:topNav>
      <div class="flex items-center h-full">
        <div class="flex items-center border-r pr-4 border-discord-black-200">
          <FriendsIcon class="ml-4 mr-2 dark:text-discord-black-60 text-gray-500"/>
          <span class="font-medium dark:text-white text-gray-600">Friends</span>
        </div>
        <div class="flex items-center ml-4 space-x-5">
          <button @click="tab = 'Online'" :class="{'btn-badge-active' : tab === 'Online'}" class="btn-badge">Online</button>
          <button @click="tab = 'All friends'" :class="{'btn-badge-active' : tab === 'All friends'}" class="btn-badge">All</button>
          <button @click="tab = 'Pending'" :class="{'btn-badge-active' : tab === 'Pending'}" class="btn-badge">Pending</button>
          <button @click="tab = 'Blocked'" :class="{'btn-badge-active' : tab === 'Blocked'}" class="btn-badge">Blocked</button>
          <button class="font-medium px-2 rounded bg-green-600 text-white">Add friend</button>
        </div>
      </div>
    </template>

    <div class="grid grid-cols-4">
      <!-- --------------------------------------------------------------------------------------------------------- -->
      <!-- Friends lists -->
      <!-- --------------------------------------------------------------------------------------------------------- -->
      <div class="p-5 px-8 col-span-3 border-r dark:border-gray-700 h-screen overflow-y-scroll
      custom-scrollbar">
        <FriendsList :tab="tab" />
      </div>

      <!-- --------------------------------------------------------------------------------------------------------- -->
      <!-- Active list -->
      <!-- --------------------------------------------------------------------------------------------------------- -->
      <div class="p-5 px-8">
        <ActiveFriends />
      </div>
    </div>

  </HomeLayout>

</template>

<script lang="ts" setup>
import HomeLayout from "@modules/home/components/HomeLayout.vue";
import FriendsIcon from "@/app/common/components/icons/FriendsIcon.vue";
import FriendsList from "@modules/home/components/friends/FriendsList.vue";
import ActiveFriends from "@modules/home/components/friends/ActiveFriends.vue";
import {ref} from "vue";

const tab = ref('Online')

</script>

<style scoped>
.btn-badge {
  @apply dark:text-discord-black-60 font-medium px-2 rounded dark:hover:bg-discord-black-100 hover:bg-gray-200 text-gray-500;
}

.btn-badge-active {
  @apply dark:bg-discord-black-100 dark:text-white bg-gray-200 text-gray-500 !important;
}
</style>