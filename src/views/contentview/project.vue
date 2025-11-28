<template>
  <NavigationBar />
  <div class="py-8">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-4xl font-semibold tracking-tight text-gray-900 joti-one-regular text-balance sm:text-5xl"
        >
          Makar's Project
        </h2>
        <p class="mt-2 mb-16 text-gray-600 homenaje-regular text-lg/8">
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
            class="flex m-2 bg-purple-200 transition-colors cursor-pointer rounded-box hover:bg-purple-300"
            @click="projectContent(mainDataObj.key)"
          >
            <div class="flex flex-row">
              <div class="place-content-center">
                <img
                  v-if="mainDataObj.titleImg"
                  :src="mainDataObj.titleImg.imgUrl"
                  alt=""
                  class="object-center m-2 w-20 max-w-none h-20 rounded-box"
                  @error="
                    handleImgError($event, mainDataObj.titleImg.locImgUrl)
                  "
                />
              </div>
              <p class="m-2 text-sm text-gray-500 homenaje-regular">
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

const handleImgError = (e: Event, locImgUrl: string) => {
  const target = e.target as HTMLImageElement;
  if (target && locImgUrl && !target.src.endsWith(locImgUrl)) {
    target.src = locImgUrl;
  }
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
