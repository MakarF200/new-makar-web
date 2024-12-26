<template>
  <div class="flex w-full">
    <div class="flex-1 h-full m-2">
      <!-- md页面 -->
      <MdToHtmlComponent></MdToHtmlComponent>
    </div>
    <div class="flex-1 h-full m-2">
      <!-- html页面 -->
      <MdToHtmlComponent></MdToHtmlComponent>
    </div>
  </div>

</template>
<script lang="ts" setup>
import MdToHtmlComponent from "@/components/component-vue/md-to-html/base-component.vue";
</script>