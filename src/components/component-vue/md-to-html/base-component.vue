<template>
  <div class="box-content p-4 w-full h-full flex-auto">
    <div class="w-full h-full bg-purple-100 rounded-box flex flex-col">
      <div class="flex place-content-between m-4">
        <div class="flex-none w-32 mx-8 my-2 p-2  bg-purple-200 rounded-box text-center">
          left
        </div>
        <div class="flex-none w-32 mx-8 my-2 m-2 p-2  bg-purple-200 rounded-box text-center">right</div>
      </div>
      <div class="w-full p-4 flex-auto">
        <textarea type="text" class="min-h-[500px] rounded-box box-content flex-none w-full indent-4"></textarea>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

import { PiniaMdToHtmlData } from "@/stores/md-to-html";
const mdToHtmlStore = PiniaMdToHtmlData();
const mdToHtmlData = computed(() => mdToHtmlStore.vueComponentData)

</script>