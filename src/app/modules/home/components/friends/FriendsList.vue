<template>
  <div class="">
    <small class="dark:text-gray-400 text-gray-600 font-bold uppercase">
      {{ tab }} — <span class="text-xs">9</span>
    </small>
    <ul class="mt-2 overflow-y-auto">
      <li class="friend-list-item" v-for="friend in friends" :key="friend">
        <div
            class="border-t border-gray-200 dark:border-gray-700
              w-full flex items-center justify-between friend-list-item-height">
          <!--            profile-->
          <div class="flex items-center">
            <ProfileImage :image="friend.image"/>
            <div class="ml-2">
              <span class="font-semibold text-gray-600 dark:text-gray-200 profile-name block">{{ friend.name }}</span>
              <small class="block text-gray-400 dark:text-discord-black-60 font-semibold">{{ friend.tagline }}</small>
            </div>
          </div>
          <!--            actions-->
          <div class="flex items-center space-x-2">
            <button
                class="action-icons btn-icons">
              <MessageIcon/>
            </button>
            <button
                class="action-icons btn-icons">
              <DotsIcon/>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import ProfileImage from "@/app/common/components/images/ProfileImage.vue";
import MessageIcon from "@/app/common/components/icons/MessageIcon.vue";
import DotsIcon from "@/app/common/components/icons/DotsIcon.vue";
import friends from "@/app/common/data/friends.json";

const props = defineProps({
  tab: {
    required: true
  }
});
</script>

<style scoped>

.friend-list-item {
  @apply px-3 flex items-center justify-between rounded-xl dark:hover:bg-gray-700 hover:bg-gray-300;
  @apply bg-opacity-30 !important
}

.profile-name {
  line-height: 10px !important;
}

.friend-list-item-height {
  height: 62px;
}

.action-icons {
  height: 36px !important;
  width: 36px !important;
}

.btn-icons {
  @apply dark:text-gray-200 dark:bg-discord-black-200 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full action-icons;
}
</style>