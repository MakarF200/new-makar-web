<template>
  <ul class="menu bg-purple-200 rounded-box h-full">
    <template v-for="item in sideData" :key="item.name">
      <li class="p-1">
        <RouterLink :to="item.href">
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.name }}
        </RouterLink>
      </li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { PiniaAsideData } from "@/stores/aside-store";

const asideStore = PiniaAsideData();
const { modifyViewData, sideData } = asideStore;

function dynamicData(
  name: "basicView" | "minView" | "blogView",
  data: boolean
) {
  modifyViewData("basicView", false);
  modifyViewData(name, data);
}
</script>
