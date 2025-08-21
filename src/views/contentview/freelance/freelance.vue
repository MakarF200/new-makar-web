<template>
  <div>
    <div class="flex flex-row items-center justify-center">
      <h1 class="text-2xl font-bold">我能为您做什么？</h1>
    </div>
    <div class="menu">
      <router-link to="/freelance/web-design">Web Design</router-link>
      <!-- 可以添加更多链接 -->
    </div>
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const show = ref(true);
</script>
<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
