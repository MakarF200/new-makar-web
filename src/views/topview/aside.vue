<template>
  <!-- makar头像 -->
  <div class="flex flex-col">
    <div
      class="menu bg-purple-100 rounded-box w-full place-content-evenly flex-auto h-15vh"
    >
      <!-- <RouterLink to="/" class="p-0"> -->
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center">
          <img
            style="height: 75%; width: 75%"
            class="rounded-full justify-center items-center"
            src="/makarpic.png"
          />
        </div>
      </div>
      <!-- </RouterLink> -->
    </div>
    <!-- 目录 -->
    <div class="mt-2 mb-2 h-60vh flex-auto">
      <Transition>
        <div v-if="asideData.basicView" class="basic-menu h-full">
          <BasicMenu></BasicMenu>
        </div>
      </Transition>
      <Transition>
        <div v-if="asideData.minView" class="min-menu h-full">
          <MinMenu></MinMenu>
        </div>
      </Transition>
      <Transition>
        <div v-if="asideData.blogView" class="blog-menu h-full">
          <BlogMenu></BlogMenu>
        </div>
      </Transition>
    </div>
    <!-- aside剩余内容：调色？等 -->
    <div class="flex-1"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
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
