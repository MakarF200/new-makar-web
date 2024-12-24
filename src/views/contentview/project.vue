<template>
  <div class="py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="joti-one-regular text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Makar's Project
        </h2>
        <p class="homenaje-regular mt-2 mb-16 text-lg/8 text-gray-600">
          Here you can see Makar creative with some project and fun games
        </p>
      </div>
      <div>
        <div
          v-for="mainDataObj in ProjectMainData"
          :key="mainDataObj.id"
          class=""
        >
          <div class="bg-purple-200 rounded-box flex m-4">
            <div class="place-content-center">
              <img
                :src="mainDataObj.titleImg.imgUrl"
                alt=""
                class="m-2 size-20 rounded-box object-center max-w-none"
              />
            </div>
            <div class="">
              {{ mainDataObj.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
// 导入store/pinia数据
import { StoreProjectData } from "@/stores/project-store";
// 解构store
const ProjectStore = StoreProjectData();
const ProjectMainData = computed(() => ProjectStore.mainData);
</script>
<style scoped>
.homenaje-regular {
  font-family: "Homenaje", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
}
.joti-one-regular {
  font-family: "Joti One", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
}
</style>
