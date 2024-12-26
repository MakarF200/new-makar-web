<template>
  <div class="w-full h-full bg-purple-100 rounded-box">
    <div class="flex place-content-between">
      <div class="flex-none w-32 mx-8 my-2 p-2  bg-purple-200 rounded-box text-center">
        left
      </div>
      <div class="flex-none w-32 mx-8 my-2 m-2 p-2  bg-purple-200 rounded-box text-center">right</div>
    </div>
    <div class="bg-gray-100 w-3/7 h-4/5"><input type="text"></div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

import { PiniaMdToHtmlData } from "@/stores/md-to-html";
const mdToHtmlStore = PiniaMdToHtmlData();
const mdToHtmlData = computed(() => mdToHtmlStore.vueComponentData)

</script>