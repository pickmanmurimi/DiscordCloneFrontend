<template>
  <nav class="min-h-screen absolute sidebar dark:bg-discord-black-600 bg-gray-100">
    <ul>
      <!-- ------------------------------------------------------------------------------------------------ -->
      <!-- Home -->
      <!-- ------------------------------------------------------------------------------------------------ -->
      <li class="flex justify-center relative items-center">
        <span class="nav-item-bar"></span>
        <a class="bg-gray-50 flex justify-center items-center nav-item rounded-2xl
          border-gray-300 border shadow" href="#">
          <img alt="discord logo" class="main-nav-logo" src="@assets/discord-logo.png">
        </a>
      </li>

      <!--      separator-->
      <li class="flex justify-center my-2">
        <span class="content-separator dark:bg-gray-700 bg-gray-300"></span>
      </li>

      <!-- ------------------------------------------------------------------------------------------------ -->
      <!-- Servers -->
      <!-- ------------------------------------------------------------------------------------------------ -->
      <li v-for="server in servers" :key="server.name" class="flex justify-center relative items-center group mb-2">
        <span class="nav-item-bar" v-if="server.active"></span>
        <span class="nav-item-notification-indicator" v-if="server.notification"></span>
        <a class="nav-link nav-item" href="#">
          <img alt="laravel logo" class="object-cover w-full h-full nav-logo"
               :src="server.image">
        </a>
      </li>
    </ul>
  </nav>

</template>
<script lang="ts" setup>
import servers from '@/app/common/data/servers.json'
</script>
<style>
.sidebar {
  width: 72px;
  padding-top: 12px;
}

.nav-item {
  width: 48px;
  height: 48px;
}

.nav-item-bar {
  width: 4px;
  height: 40px;
  @apply dark:bg-gray-50 bg-purple-400 absolute left-0 rounded-tr-2xl rounded-br-2xl;
}

.nav-item-notification-indicator {
  width: 4px;
  height: 8px;
  @apply dark:bg-gray-50 bg-purple-400 absolute left-0 rounded-tr-2xl rounded-br-2xl;
}

.content-separator {
  height: 2px;
  width: 32px;
}

.nav-logo {
  height: 48px;
  width: 48px;
}

.main-nav-logo {
  height: 26px;
  width: 26px;
}
</style>
