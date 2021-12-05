<template>
  <HomeLayout>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!-- Friends navigation -->
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <template v-slot:topNav>
      <div class="flex items-center h-full">
        <div class="flex items-center border-r pr-4 border-discord-black-200">
          <FriendsIcon class="ml-4 mr-2 text-gray-500"/>
          <span class="font-medium dark:text-white text-gray-500">Friends</span>
        </div>
        <div class="flex items-center ml-4 space-x-5">
          <button class="btn-badge btn-badge-active">Online</button>
          <button class="btn-badge">All</button>
          <button class="btn-badge">Pending</button>
          <button class="btn-badge">Blocked</button>
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
        <FriendsList />
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
</script>

<style scoped>
.btn-badge {
  @apply dark:text-gray-400 font-medium px-2 rounded dark:hover:bg-discord-black-100 hover:bg-gray-200 text-gray-500;
}

.btn-badge-active {
  @apply dark:bg-discord-black-100 dark:text-white bg-gray-200 text-gray-500 !important;
}
</style>