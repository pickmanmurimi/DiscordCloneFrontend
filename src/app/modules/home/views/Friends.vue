<template>
  <HomeLayout>
    <template v-slot:topNav>
      <div class="flex items-center h-full">
        <div class="flex items-center border-r pr-4 border-gray-600">
          <FriendsIcon class="ml-4 mr-2 text-gray-500" />
          <span class="font-medium dark:text-white text-gray-500">Friends</span>
        </div>
      </div>
    </template>

    <div>

      <FriendsIcon class="m-40 text-gray-500 w-52 h-52 animate-pulse" />

    </div>
  </HomeLayout>

</template>

<script lang="ts" setup>
import HomeLayout from "@modules/home/components/HomeLayout.vue";
import FriendsIcon from "@/app/common/components/icons/FriendsIcon.vue";
</script>

<style scoped>

</style>