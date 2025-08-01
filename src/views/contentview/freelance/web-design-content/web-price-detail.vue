<template>
  <div>
    <div>
      <button @click="router.back()">返回</button>
    </div>
    <div>
      <h2>web-price-detail</h2>
    </div>
    <div v-if="type === 'level-one'">
      <h2>level-one</h2>
    </div>
    <div v-if="type === 'level-two'">
      <h2>level-two</h2>
    </div>
    <div v-if="type === 'level-three'">
      <h2>level-three</h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const type = route.params.type as string;
</script>
