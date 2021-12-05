<template>
  <div>
    <h3 class="dark:text-gray-300 text-gray-700 text-2xl font-bold">Active now</h3>
    <!-- --------------------------------------------------------------------------------------------------------- -->
    <!-- Friends activities -->
    <!-- --------------------------------------------------------------------------------------------------------- -->
    <div class="p-4 mt-2 border rounded-xl bg-gray-200 dark:border-gray-700 dark:bg-discord-black-100">
      <!--    friends  -->
      <div class="flex space-x-2 w-full">
        <ProfileImage image="/images/servers/logosmalltransparent.png"/>
        <div class="flex justify-between w-full">
          <div class="text-gray-800 dark:text-gray-50">
            <span class="font-semibold block">asthetic, daveLee</span>
            <small class="block">RuneLite – 2m</small>
          </div>
          <div class="rounded overflow-hidden h-5 w-5">
            <img alt="apex" class="h-5 object-cover" src="/images/placeholders/apex.png">
          </div>
        </div>
      </div>

      <!--      activity-->
      <div class="bg-white flex space-x-2 p-4 mt-4 rounded-xl items-center dark:bg-gray-500">
        <div class="rounded overflow-hidden h-5 w-5">
          <img alt="apex" class="h-5 object-cover" src="/images/placeholders/apex.png">
        </div>
        <div class="text-gray-800 dark:text-gray-200">
          <strong class="block">Playing pubs</strong>
          <small class="block">Apex Legends</small>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import ProfileImage from "@/app/common/components/images/ProfileImage.vue";
</script>