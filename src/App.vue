<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="scale">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
