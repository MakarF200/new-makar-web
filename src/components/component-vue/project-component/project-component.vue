<template>
  <NavigationBar />
  <div class="mt-32 overflow-hidden sm:mt-40">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            {{ projectShowTextData.title }}
          </h2>
          <p class="mt-6 text-xl/8 text-gray-700">
            {{ projectShowTextData.contentTextOne }}
          </p>
          <p class="mt-6 text-base/7 text-gray-600">
            {{ projectShowTextData.contentTextTwo }}
          </p>
        </div>
        <div
          class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
        >
          <div
            class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
          >
            <img
              v-if="projectShowData[0]"
              :src="projectShowData[0].imgUrl || projectShowData[0].locImgUrl"
              :alt="projectShowData[0].key"
              class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-[30rem]"
            />
          </div>
          <div
            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
          >
            <div
              class="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto"
            >
              <img
                v-if="projectShowData[1]"
                :src="projectShowData[1].imgUrl || projectShowData[1].locImgUrl"
                :alt="projectShowData[1].key"
                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <img
                v-if="projectShowData[2]"
                :src="projectShowData[2].imgUrl || projectShowData[2].locImgUrl"
                :alt="projectShowData[2].key"
                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-[30rem]"
              />
            </div>
            <div
              class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
            >
              <img
                v-if="projectShowData[3]"
                :src="projectShowData[3].imgUrl || projectShowData[3].locImgUrl"
                :alt="projectShowData[3].key"
                class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import {
  ProjectShowImgData,
  getProjectShowImgData,
} from "@/stores/project-store";
import NavigationBar from "@/components/component-vue/navigation-bar.vue";
// 获取项目展示图片数据
const projectShowStore = ProjectShowImgData();
const projectShowData = computed(() => projectShowStore.projectShowData);
const projectShowTextData = computed(
  () => projectShowStore.projectShowTextData
);

// 获取路由信息
const route = useRoute();

// 在组件挂载时检测URL并获取数据
onMounted(() => {
  // 检查store中是否已有数据（图片或文字）
  if (projectShowData.value.length === 0 || !projectShowTextData.value.title) {
    // 尝试从URL路径中获取项目key
    const pathSegments = route.path.split("/");
    const projectKey = pathSegments[pathSegments.length - 1];

    // 如果URL中有项目key，则获取对应的图片和文字数据
    if (projectKey && projectKey !== "project-content") {
      console.log("从URL检测到项目key:", projectKey);
      getProjectShowImgData(projectKey);
    }
  }
});
</script>
