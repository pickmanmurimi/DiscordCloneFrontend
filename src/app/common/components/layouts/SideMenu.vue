<template>
  <nav class="min-h-screen absolute sidemenu dark:bg-discord-black-400 bg-gray-200">
    <!--    search bar-->
    <div class="sidemenu-title flex items-center shadow">
      <button class="searchbar-btn font-medium" type="button">
        Find or start a conversation
      </button>
    </div>

    <!--    sidemenu-items-->
    <ul class="mt-2">
      <!--    friends-->
      <li class="sidemenu-items flex items-center">
        <a href="#" class="sidemenu-item-active sidemenu-item">
          <UserCircleIcon style="height: 24px;" class="pr-4" />
          <span class="font-medium">Friends</span>
        </a>
      </li>
      <!--    nitro-->
      <li class="sidemenu-items flex items-center">
        <a href="#" class="sidemenu-item">
          <SupportIcon style="height: 24px;" class="pr-4" />
          <span class="font-medium">Nitro</span>
        </a>
      </li>
    </ul>

  </nav>

</template>
<script lang="ts" setup>
import { UserCircleIcon } from '@heroicons/vue/solid'
import { SupportIcon } from '@heroicons/vue/solid'

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
  padding-left: 10px;
  padding-right: 10px;
}

.sidemenu-item {
  @apply w-full h-full rounded flex items-center px-2 text-gray-400;
}

.sidemenu-item-active {
  @apply dark:text-gray-50 dark:bg-discord-black-200 bg-gray-100 text-gray-600;
}
</style>
