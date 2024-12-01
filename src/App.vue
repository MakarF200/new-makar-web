<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import AsideVue from "@/views/topview/aside.vue";
import ContentVue from "@/views/topview/contentview.vue";
</script>

<template>
  <div class="div-top">
    <div class="asidevue">
      <AsideVue></AsideVue>
    </div>
    <div class="contentvue">
      <ContentVue></ContentVue>
    </div>
  </div>
</template>

<style scoped>
.asidevue {
  margin-right: 0.5rem;
}
.div-top {
  display: flex;
  padding: 10px;
}

</style>
