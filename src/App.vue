<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import AsideVue from "@/views/topview/aside.vue";
import ContentVue from "@/views/topview/contentview.vue";
import { onMounted, ref } from "vue";
//  transition动画数据
const showside = ref(false);
const showcontent = ref(false);
onMounted(() => {
  showside.value = true;
  showcontent.value = true;
});
</script>

<template>
  <div class="div-top h-screen w-screen flex overflow-hidden p-2">
    <!-- 目录侧边栏 -->
    <Transition name="side">
      <div
        v-if="showside"
        class="asidevue bg-purple-50 rounded-box box-content mr-2 w-[200px] hidden lg:block"
      >
        <AsideVue></AsideVue>
      </div>
    </Transition>
    <!-- 内容栏 -->
    <Transition name="content">
      <div
        v-if="showcontent"
        class="contentvue bg-purple-50 rounded-box flex-1 overflow-auto"
      >
        <ContentVue></ContentVue>
      </div>
    </Transition>
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
.side-enter-active,
.side-leave-active {
  transition: all 1s ease-in-out;
}
.content-enter-active,
.content-leave-active {
  transition: all 1s ease-in-out;
}
.side-enter-from,
.side-leave-to,
.content-enter-from,
.content-leave-to {
  opacity: 0;
}
.side-enter-from,
.side-leave-to {
  transform: translateX(-100%);
}
.content-enter-from,
.content-leave-to {
  transform: translateX(100%);
}
</style>

<!-- 这里是这个项目要做的TODO树 -->
<!-- TODO: 配置网站的cloudflare -->
<!-- TODO: 完成md to html项目 -->
<!-- TODO: 在项目中添加动画 -->
