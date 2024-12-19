<template>
  <div v-html="blogData.content" class="markdown-body md-style"></div>
</template>

<script lang="ts" setup>
import "github-markdown-css";
import { PiniaBlogData } from "@/stores/blog-store";
const blogStore = PiniaBlogData();
const blogData = blogStore.mdData;
</script>

<style scoped>
/* ::v-deep .md-style {
  @import "@/assets/css-file/bluetex.css";
} */
/* TODO: 这里的样式需要用md-style的样式，但无法实现只改变v-html的样式类别 */
/* 试图使用深度绑定来解决（；´д｀）ゞ，失败 */
</style>
