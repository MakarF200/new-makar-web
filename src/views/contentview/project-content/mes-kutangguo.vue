<template>
  <div class="relative isolate overflow-hidden bg-white">
    <div class="">
      <div class="mx-16 pt-2 lg:flex w-4/6">
        <!-- 文字 -->
        <div class="mx-auto max-w-96 mt-16 lg:mx-0 lg:shrink-0 lg:pt-8">
          <!-- 标题 -->
          <h1
            class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
          >
            {{ projectStoreDataMesSystem.name }}
          </h1>
          <!-- 介绍内容 -->
          <p
            class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
          >
            {{ projectStoreDataMesSystem.description }}
          </p>
        </div>
        <!-- 图片 -->
        <div
          class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-16 lg:max-w-none lg:flex-none xl:ml-32"
        >
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div
              class="-m-2 rounded-xl bg-gray-900/5 p-2 lg:-m-4 lg:rounded-2xl lg:p-4"
            >
              <img
                :src="projectStoreDataMesSystem.showLocImgUrl"
                alt="App screenshot"
                width="2432"
                height="1442"
                class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播图片 -->
      <div class="bg-purple-200 rounded-box w-full py-8 mt-16">图片</div>
      <div class="w-80% h-auto place-content-center">
        <div class="mx-auto max-w-7xl px-12 py-16 sm:px-6 sm:py-24 lg:px-8">
          <!-- 图片 -->
          <div
            class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"
          >
            <div
              class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square"
            >
              <img
                :src="showThisProjectImg.leftShow.locImgUrl"
                :alt="showThisProjectImg.leftShow.key"
                class="absolute size-full object-cover group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
              />
            </div>
            <div
              class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto"
            >
              <img
                :src="showThisProjectImg.rightTopShow.locImgUrl"
                :alt="showThisProjectImg.rightTopShow.key"
                class="absolute size-full object-cover group-hover:opacity-75"
              />
            </div>
            <div
              class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto"
            >
              <img
                :src="showThisProjectImg.rightBotShow.locImgUrl"
                :alt="showThisProjectImg.rightBotShow.key"
                class="absolute size-full object-cover group-hover:opacity-75"
              />
            </div>
          </div>

          <div class="mt-6 sm:hidden">
            <a
              href="#"
              class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { computed, onMounted, ref } from "vue";
// 导入projectStore并处理数据
import { StoreProjectData } from "@/stores/project-store";
import type { ShowThisVueRotationImg } from "@/types/project";
const projectStore = StoreProjectData();
const projectStoreDataMesSystem = computed(
  () => projectStore.projectMainData[1]
);

/**
 * @var { Ref<ShowThisVueRotationImg>showThisProjectImg }vue中展示的rotation数据
 */
const showThisProjectImg = ref<ShowThisVueRotationImg>({
  leftShow: {
    imgUrl: "",
    locImgUrl: "",
    key: "",
    id: "",
  },
  rightTopShow: {
    imgUrl: "",
    locImgUrl: "",
    key: "",
    id: "",
  },
  rightBotShow: {
    imgUrl: "",
    locImgUrl: "",
    key: "",
    id: "",
  },
});
/**
 * @function changeRotationData 将store的rotation中的数据赋值到组件中showThisProjectImg对应的值
 * @param vueLocRechangeName showThisProjectImg 中的key
 * @param StoreImportListLoc store中rotation中数组的地址（index）
 */
function changeRotationData(
  vueLocRechangeName: keyof ShowThisVueRotationImg,
  StoreImportListLoc: number
) {
  showThisProjectImg.value[vueLocRechangeName].locImgUrl =
    projectStoreDataMesSystem.value.rotation[StoreImportListLoc].locImgUrl;
  showThisProjectImg.value[vueLocRechangeName].imgUrl =
    projectStoreDataMesSystem.value.rotation[StoreImportListLoc].imgUrl;
  showThisProjectImg.value[vueLocRechangeName].key =
    projectStoreDataMesSystem.value.rotation[StoreImportListLoc].key;
  showThisProjectImg.value[vueLocRechangeName].id =
    projectStoreDataMesSystem.value.rotation[StoreImportListLoc].id;
}

// function changeRotationImg(operation: string) {
//   if (operation === "left") {

//   }
// }

function startLoadRotationImg() {
  // 更改左侧（left）数据
  changeRotationData("leftShow", 0);
  changeRotationData("leftShow", 0);
  changeRotationData("leftShow", 0);
  // 更改右侧顶部（rightTop）数据
  changeRotationData("rightTopShow", 1);
  changeRotationData("rightTopShow", 1);
  changeRotationData("rightTopShow", 1);
  // 更改右侧底部（rightBot）数据
  changeRotationData("rightBotShow", 2);
  changeRotationData("rightBotShow", 2);
  changeRotationData("rightBotShow", 2);
}
onMounted(() => {
  startLoadRotationImg();
});
</script>
