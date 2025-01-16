<template>
  <div class="flex w-full">
    <div class="flex-auto h-full flex">
      <!-- md页面 -->
      <MdToHtmlComponent
        :message="leftComponentTransferData"
      ></MdToHtmlComponent>
    </div>
    <div class="flex-auto h-full flex">
      <!-- html页面 -->
      <MdToHtmlComponent
        :message="rightComponentTransferData"
      ></MdToHtmlComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
// 导入需要的组件
import MdToHtmlComponent from "@/components/component-vue/md-to-html/base-component.vue";
import { computed, ref } from "vue";
// 导入md to html的store
import { PiniaMdToHtmlData } from "@/stores/md-to-html";
const mdToHtmlStore = PiniaMdToHtmlData();
const mdToHtmlData = computed(() => mdToHtmlStore.vueComponentData);

const leftComponentTransferData = ref(
  mdToHtmlData.value.viewComponent?.leftComponent
);
const rightComponentTransferData = ref(
  mdToHtmlData.value.viewComponent?.rightComponent
);
</script>
