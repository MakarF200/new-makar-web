<template>
  <div class="flex w-full">
    <div class="flex-auto h-full flex">
      <!-- md页面 -->
      <MdToHtmlComponent :message="transferData"></MdToHtmlComponent>
    </div>
    <div class="flex-auto h-full flex">
      <!-- html页面 -->
      <MdToHtmlComponent></MdToHtmlComponent>
    </div>
  </div>

</template>
<script lang="ts" setup>
import MdToHtmlComponent from "@/components/component-vue/md-to-html/base-component.vue";
import { computed } from "vue";
import { PiniaMdToHtmlData } from "@/stores/md-to-html";
const mdToHtmlStore = PiniaMdToHtmlData();
const mdToHtmlData = computed(() => mdToHtmlStore.vueComponentData)
const transferData = defineProps(["one", "two"])
</script>
