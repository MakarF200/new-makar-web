<template>
  <NavigationBar />
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
          class="max-h-40"
        >
          <div
            class="bg-purple-200 rounded-box flex m-2 cursor-pointer transition-colors hover:bg-purple-300"
            @click="projectContent(mainDataObj.key)"
          >
            <div class="flex flex-row">
              <div class="place-content-center">
                <img
                  :src="mainDataObj.titleImg.imgUrl"
                  alt=""
                  class="m-2 w-20 h-20 rounded-box object-center max-w-none"
                />
              </div>
              <p class="text-sm text-gray-500 homenaje-regular m-2">
                {{ mainDataObj.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
// 导入store/pinia数据
import {
  StoreProjectData,
  getProjectShowImgData,
} from "@/stores/project-store";
import { useRouter } from "vue-router";
import NavigationBar from "@/components/component-vue/navigation-bar.vue";
// 解构store
const ProjectStore = StoreProjectData();
const ProjectMainData = computed(() => ProjectStore.projectMainData);
// router路由配置
const router = useRouter();
// 导向项目内容页面路由
const projectContent = (type: string) => {
  getProjectShowImgData(type);
  router.push(`/project-content/${type}`);
  console.log("导向项目内容页面路由", type);
};
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
