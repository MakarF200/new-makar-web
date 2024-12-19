<template>
  <div v-html="blogData.content" class="md-style"></div>
</template>
<script lang="ts" setup>
import "github-markdown-css";
import { ref, computed } from "vue";
import { PiniaBlogData } from "@/stores/blog-store";
const blogStore = PiniaBlogData();
const blogData = blogStore.mdData;
</script>
<style module>
@import "../../../assets/md-style/";
</style>
