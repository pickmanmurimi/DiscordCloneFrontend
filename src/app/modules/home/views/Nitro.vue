<template>
  <HomeLayout>
    <template v-slot:topNav>
      <div class="flex items-center h-full">
        <div class="flex items-center border-r pr-4 border-gray-600">
          <NitroIcon class="ml-4 mr-2 text-gray-500" />
          <span class="font-medium text-white">Nitro</span>
        </div>
      </div>
    </template>
    <div>
      <!--    top nav for friends-->
      <NitroIcon class="m-40 text-gray-500 w-52 h-52 animate-pulse" />
    </div>
  </HomeLayout>

</template>

<script lang="ts" setup>
import HomeLayout from "@modules/home/components/HomeLayout.vue";
import FriendsIcon from "@/app/common/components/icons/FriendsIcon.vue";
import NitroIcon from "@/app/common/components/icons/NitroIcon.vue";
</script>

<style scoped>

</style>