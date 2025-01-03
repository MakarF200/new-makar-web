<template>
  <div v-html="viewData" class="markdown-body md-style"></div>
</template>

<script lang="ts" setup>
import "github-markdown-css";
import { ref, onMounted } from "vue";
import { marked } from "marked";

const viewData = ref<string>("");  // 用 ref 存储转换后的 HTML

// 组件挂载后加载 Markdown 内容
onMounted(async () => {
  const mdContent = await fetchMdContent("/public/markdown/ant-travel/about.md");
  viewData.value = getMd(mdContent);  // 获取转换后的 HTML
});

/**
 * 异步获取 Markdown 文件内容
 * @param mdPath Markdown 文件路径
 * @returns {Promise<string>} Markdown 内容
 */
async function fetchMdContent(mdPath: string): Promise<string> {
  const response = await fetch(mdPath);  // 使用 fetch 获取文件内容
  if (!response.ok) {
    throw new Error("Failed to fetch the markdown file.");
  }
  return await response.text();  // 返回文件内容
}

/**
 * 用 marked 转换成 HTML
 * @func getMd
 * @param {string} mdData Markdown 数据
 * @returns {string} 转换后的 HTML
 */
function getMd(mdData: string): string {
  return marked(mdData);  // 使用 marked 将 Markdown 转换为 HTML
}
</script>



<style scoped>
/* ::v-deep .md-style {
  @import "@/assets/css-file/bluetex.css";
} */
/* TODO: 这里的样式需要用md-style的样式，但无法实现只改变v-html的样式类别 */
/* 试图使用深度绑定来解决（；´д｀）ゞ，失败 */
</style>