<template>
  <HomeLayout>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!-- Direct Messages navigation -->
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <template v-slot:topNav>
      <div class="flex items-center h-full">
        <div class="flex items-center border-r pr-4 border-discord-black-200">
          <AtIcon class="ml-4 mr-2 dark:text-discord-black-60 text-gray-500"/>
          <span class="font-medium dark:text-white text-gray-600 mr-2">{{ friend?.name }}</span>
          <span class="status-indicator-wrapper bg-discord-black-400 rounded-full">
            <span class="status-indicator bg-green-400 rounded-full"></span>
          </span>
        </div>
      </div>
    </template>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!-- Direct Messages -->
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <div>

    </div>

  </HomeLayout>
</template>

<style scoped>

</style>
<script lang="ts" setup>
import HomeLayout from "@modules/home/components/HomeLayout.vue";
import AtIcon from "@/app/common/components/icons/AtIcon.vue";
import {useRoute} from "vue-router";
import friends from "@/app/common/data/directMessages.json"
import {computed, ref} from "vue";
import {watch} from "vue";

const route = useRoute();

const friend = ref(friends.find( value => route.params.channel === value.name))
//
watch( route , () => {
  friend.value = friends.find( value => route.params.channel == value.name);
}, {immediate: true})

</script>