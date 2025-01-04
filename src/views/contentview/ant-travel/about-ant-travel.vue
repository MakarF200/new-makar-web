<template>
  <div v-html="viewData" class="markdown-body md-style"></div>
</template>
<script lang="ts" setup>
import "github-markdown-css";
import { ref, onMounted } from "vue";
import { marked } from "marked";

const viewData = ref<string | undefined>("");
// 组件挂载后加载 Markdown 内容
onMounted(async () => {
  viewData.value = await getMdContent("/public/markdown/ant-travel/about.md")
});
/**
 * @function getMdContent 获取md文件内容，并将其转换成html
 * @param url 传入的md文件地址
 */
async function getMdContent(url: string): Promise<string | undefined> {
  try {
    const response = await fetch(url); // 获取 Response 对象
    if (!response.ok) {
      throw new Error(`Failed to fetch the Markdown file. Status: ${response.status}`);
    }
    const markdownText = await response.text(); // 调用 text() 获取 Promise<string> 的解析结果
    console.log("VUE : FUNC : markdownText is : ", markdownText);
    const htmlContent = marked(markdownText); // 将 Markdown 转换为 HTML
    return htmlContent;
  } catch (error) {
    console.error("VUE : FUNC : getMdContent encountered an error: ", error);
  }
}
</script>
<style scoped>
/* ::v-deep .md-style {
  @import "@/assets/css-file/bluetex.css";
} */
/* TODO: 这里的样式需要用md-style的样式，但无法实现只改变v-html的样式类别 */
/* 试图使用深度绑定来解决（；´д｀）ゞ，失败 */
</style>