<template>
  <nav class="bg-gray-800 min-h-screen absolute sidebar">
    <ul class="">
      <!--      Home-->
      <li class="flex justify-center relative items-center">
        <span class="nav-item-bar bg-gray-50 absolute left-0 rounded-tr-2xl rounded-br-2xl"></span>
        <a class="bg-gray-50 flex justify-center items-center nav-item rounded-2xl" href="#">
          <img alt="discord logo" class="main-nav-logo" src="@assets/discord-logo.png">
        </a>
      </li>
      <!--      separator-->
      <li class="flex justify-center my-2">
        <span class="content-separator bg-gray-700"></span>
      </li>
      <!-- ------------------------------------------------------------------------------------------------ -->
      <!-- Servers -->
      <!-- ------------------------------------------------------------------------------------------------ -->
      <!--      server 1-->
      <li class="flex justify-center relative items-center group mb-2">
        <span class="nav-item-bar bg-gray-50 absolute left-0 rounded-tr-2xl rounded-br-2xl"></span>
        <a class="bg-gray-50 flex justify-center items-center
        nav-item rounded-full group-hover:rounded-2xl overflow-hidden" href="#">
          <img alt="laravel logo" class="object-cover w-full h-full nav-logo"
               src="@assets/servers/laravel.png">
        </a>
      </li>
      <!--      server 2-->
      <li class="flex justify-center relative items-center group mb-2">
        <span class="nav-item-notification-indicator bg-gray-50 absolute left-0 rounded-tr-2xl rounded-br-2xl"></span>
        <a class="bg-gray-50 flex justify-center items-center
        nav-item rounded-full group-hover:rounded-2xl overflow-hidden" href="#">
          <img alt="tailwind logo" class="object-cover w-full h-full nav-logo"
               src="@assets/servers/tailwind.png">
        </a>
      </li>
      <!--      server 3-->
      <li class="flex justify-center relative items-center group mb-2">
        <span class="nav-item-notification-indicator bg-gray-50 absolute left-0 rounded-tr-2xl rounded-br-2xl"></span>
        <a class="bg-gray-50 flex justify-center items-center
        nav-item rounded-full group-hover:rounded-2xl overflow-hidden" href="#">
          <img alt="arch tech logo" class="object-cover w-full h-full nav-logo"
               src="@assets/servers/archtech.png">
        </a>
      </li>
      <!--      server 4-->
      <li class="flex justify-center relative items-center group mb-2">
        <span class="nav-item-notification-indicator bg-gray-50 absolute left-0 rounded-tr-2xl rounded-br-2xl"></span>
        <a class="bg-gray-50 flex justify-center items-center
        nav-item rounded-full group-hover:rounded-2xl overflow-hidden" href="#">
          <img alt="apex legends logo" class="object-cover w-full h-full nav-logo"
               src="@assets/servers/apexlegends.png">
        </a>
      </li>
    </ul>
  </nav>

</template>
<script lang="ts" setup>
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
}

.nav-item-notification-indicator {
  width: 4px;
  height: 8px;
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
