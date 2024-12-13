<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import AsideVue from "@/views/topview/aside.vue";
import ContentVue from "@/views/topview/contentview.vue";
</script>

<template>
  <div class="div-top w-screen">
    <div class="asidevue mr-2 bg-purple-50 rounded-box">
      <AsideVue></AsideVue>
    </div>
    <div class="contentvue bg-purple-50 rounded-box flex-1">
      <ContentVue></ContentVue>
    </div>
  </div>
</template>

<style scoped>

.div-top {
  display: flex;
  padding: 10px;
}

</style>
<style>
#app {
   padding: 0;
   display: flex;
   max-width: 100%;
}
</style>
