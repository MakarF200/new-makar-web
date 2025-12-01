<template>
  <!-- makar头像 -->
  <div class="flex flex-col">
    <div
      class="flex-auto place-content-evenly w-full bg-purple-100 menu rounded-box h-15vh"
    >
      <!-- <RouterLink to="/" class="p-0"> -->
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center">
          <img
            style="height: 75%; width: 75%"
            class="justify-center items-center rounded-full"
            src="/makarpic.png"
          />
        </div>
      </div>
      <!-- </RouterLink> -->
    </div>
    <!-- 目录 -->
    <div class="flex-auto mt-2 mb-2 h-60vh">
      <Transition>
        <div v-if="asideData.basicView" class="h-full basic-menu">
          <BasicMenu></BasicMenu>
        </div>
      </Transition>
      <Transition>
        <div v-if="asideData.minView" class="h-full min-menu">
          <MinMenu></MinMenu>
        </div>
      </Transition>
      <Transition>
        <div v-if="asideData.blogView" class="h-full blog-menu">
          <BlogMenu></BlogMenu>
        </div>
      </Transition>
    </div>
    <!-- aside剩余内容：调色？等 -->
    <div class="flex-1"></div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { PiniaAsideData } from "@/stores/aside-store";

const asideStore = PiniaAsideData();
const asideData = computed(() => asideStore.dynamicViewData);

import BasicMenu from "@/views/contentview/aside-views/basic-menu.vue";
import BlogMenu from "@/views/contentview/aside-views/blog-menu.vue";
import MinMenu from "@/views/contentview/aside-views/min-menu.vue";
</script>
<style scoped>
.aside-top {
  display: flex !important;
  flex-direction: row;
}

@media screen {
}
</style>
