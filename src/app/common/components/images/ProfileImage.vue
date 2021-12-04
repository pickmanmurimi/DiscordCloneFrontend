<template>
  <!-- profile picture-->
  <div class="relative">
    <img alt="irup io logo" class="object-cover image dm-thumbnail rounded-full
           border border-gray-300 group-hover:border-0 bg-white"
         src="/images/placeholders/logosmalltransparent.png">
    <span class="absolute status-indicator-wrapper bg-discord-black-400 rounded-full">
      <span class="status-indicator bg-green-400 rounded-full"></span>
    </span>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.image {
  height: 35px !important;
  width: 35px !important;
}
</style>