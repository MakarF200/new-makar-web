<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import AsideVue from "@/views/topview/aside.vue";
import ContentVue from "@/views/topview/contentview.vue";
</script>

<template>
  <div class="div-top w-screen h-screen flex overflow-hidden p-2 ">
    <!-- 目录侧边栏 -->
    <div class="asidevue bg-purple-50 rounded-box box-content w-1/8 min-w-[200px]">
      <AsideVue></AsideVue>
    </div>
    <!-- 内容栏 -->
    <div class="contentvue bg-purple-50 rounded-box flex-1 ml-2 overflow-auto">
      <ContentVue></ContentVue>
    </div>
  </div>
</template>

<style>
#app {
  padding: 0;
  display: flex;
  max-width: 100%;
}

ol {
  list-style: decimal !important;
}
</style>

<!-- 这里是这个项目要做的TODO树 -->
<!-- TODO: 配置网站的cloudflare -->
<!-- TODO: 完成md to html项目 -->
<!-- TODO: 在项目中添加动画 -->