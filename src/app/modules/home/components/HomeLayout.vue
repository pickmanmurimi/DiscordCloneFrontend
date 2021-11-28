<template>
  <MainLayout>
    <!--  side menu -->
    <template v-slot:sideMenu>
      <HomeSideMenu/>
    </template>

    <!--    top nav-->
    <template v-slot:topNav>
      <slot name="topNav"></slot>
    </template>

    <!--    content-->
    <div class="">
      <slot></slot>
    </div>

  </MainLayout>

</template>

<script lang="ts" setup>
import MainLayout from "@/app/common/components/layouts/MainLayout.vue";
import HomeSideMenu from "@modules/home/components/HomeSideMenu.vue";
</script>