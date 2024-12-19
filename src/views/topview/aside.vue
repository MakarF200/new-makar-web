<template>
  <div style="width: 17rem">
    <div
      class="menu bg-purple-100 rounded-box w-full p-4 place-content-evenly"
      style="height: 25vh"
    >
      <!-- <RouterLink to="/" class="p-0"> -->
      <div class="avatar">
        <div class="w-20 rounded-full">
          <img src="/public/makarpic.png" />
        </div>
      </div>
      <p>Makar</p>
      <!-- </RouterLink> -->
    </div>
    <div class="mt-2 mb-2" style="height: 50vh">
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
