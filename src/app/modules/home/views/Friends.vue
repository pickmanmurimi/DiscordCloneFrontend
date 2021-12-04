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
      <!-- ----------------------------------------------------------------------------------------------------------- -->
      <!-- Friends lists -->
      <!-- ----------------------------------------------------------------------------------------------------------- -->
      <div class="p-5 px-8 col-span-3 border-r dark:border-gray-700 min-h-screen">
        <small class="dark:text-gray-400 font-bold uppercase">
          Online — <span class="text-xs">9</span>
        </small>
        <ul class="mt-2">
          <li class="friend-list-item">
            <div
                class="border-t border-gray-300 dark:border-gray-700
              w-full flex items-center justify-between friend-list-item-height">
              <!--            profile-->
              <div class="flex items-center">
                <ProfileImage/>
                <div class="ml-2">
                  <span class="font-bold text-gray-400 dark:text-gray-200 profile-name block">FriedMudkip</span>
                  <small class="font-medium block text-gray-400 dark:text-gray-400">FriedMudkip</small>
                </div>
              </div>
              <!--            actions-->
              <div class="flex items-center space-x-2">
                <button
                    class="action-icons btn-icons">
                  <MessageIcon/>
                </button>
                <button
                    class="action-icons btn-icons">
                  <DotsIcon/>
                </button>
              </div>

            </div>

          </li>
          <li class="friend-list-item">
            <div
                class="border-t border-gray-300 dark:border-gray-700 border-opacity-30 w-full flex items-center justify-between friend-list-item-height">
              <!--            profile-->
              <div class="flex items-center">
                <ProfileImage/>
                <div class="ml-2">
                  <span class="font-bold text-gray-400 text-gray-200 profile-name block">Lorem</span>
                  <small class="font-medium block text-gray-400 text-gray-400">Lorem</small>

                </div>
              </div>

              <!--            actions-->
              <div class="flex items-center space-x-2">
                <button
                    class="action-icons btn-icons">
                  <MessageIcon/>
                </button>
                <button
                    class="action-icons btn-icons">
                  <DotsIcon/>
                </button>
              </div>
            </div>

          </li>
        </ul>

      </div>

      <!-- ----------------------------------------------------------------------------------------------------------- -->
      <!-- Active list -->
      <!-- ----------------------------------------------------------------------------------------------------------- -->
      <div class="p-5 px-8"></div>
    </div>

  </HomeLayout>

</template>

<script lang="ts" setup>
import HomeLayout from "@modules/home/components/HomeLayout.vue";
import FriendsIcon from "@/app/common/components/icons/FriendsIcon.vue";
import ProfileImage from "@/app/common/components/images/ProfileImage.vue";
import MessageIcon from "@/app/common/components/icons/MessageIcon.vue";
import DotsIcon from "@/app/common/components/icons/DotsIcon.vue";
</script>

<style scoped>
.btn-badge {
  @apply dark:text-gray-400 font-medium px-2 rounded dark:hover:bg-discord-black-100 hover:bg-gray-200 text-gray-500;
}

.btn-badge-active {
  @apply dark:bg-discord-black-100 dark:text-white bg-gray-200 text-gray-500 !important;
}

.friend-list-item {
  @apply px-3 flex items-center justify-between rounded-xl dark:hover:bg-gray-700 hover:bg-gray-300;
  @apply bg-opacity-30 !important
}

.profile-name {
  line-height: 8px !important;
}

.friend-list-item-height {
  height: 62px;
}

.action-icons {
  height: 36px !important;
  width: 36px !important;
}

.btn-icons {
  @apply dark:text-gray-200 dark:bg-discord-black-200 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full action-icons;
}

</style>