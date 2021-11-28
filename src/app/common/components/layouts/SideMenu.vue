<template>
  <nav class="min-h-screen absolute sidemenu">
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
        <a href="#" class="text-gray-50 sidemenu-items-active w-full h-full rounded flex items-center px-2">
          <UserCircleIcon style="height: 24px;" class="pr-4" />
          <span class="font-medium">Friends</span>
        </a>
      </li>
      <!--    nitro-->
      <li class="sidemenu-items flex items-center">
        <a href="#" class="text-gray-400 w-full h-full rounded flex items-center px-2">
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
  background: #2f3136;
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

.sidemenu-items-active {
  background: #393c43;
}
</style>
