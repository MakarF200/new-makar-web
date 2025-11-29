<template>
  <!-- 导航栏 -->
  <div class="block lg:hidden">
    <nav
      class="flex flex-row justify-between items-center p-6 mx-auto mt-4 max-w-7xl lg:justify-end lg:px-8 rounded-box"
      aria-label="Global"
    >
      <!-- 汉堡包按钮 -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="inline-flex justify-center items-center p-2.5 -m-2.5 text-gray-700 rounded-md"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <NavigationHamburger class="w-6 h-6" />
        </button>
      </div>
      <!-- 返回按钮 -->
      <div class="hidden">
        <button
          type="button"
          @click="router.back()"
          class="px-3 py-2 text-sm font-semibold text-white bg-purple-200 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          返回
        </button>
      </div>
      <!-- 语言选择按钮 -->
      <div>
        <label
          for="language"
          class="block text-sm font-medium text-gray-700 sr-only"
          >语言选择</label
        >
        <div class="relative">
          <select
            id="language"
            name="language"
            class="px-3 py-2 pr-8 text-sm text-gray-900 bg-purple-200 rounded-md border border-purple-200 appearance-none focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
          <ChevronDownIcon
            class="absolute right-2 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
    <!-- TODO：这里需要调整汉堡包的dialog显示的内容 -->
    <Dialog
      class="lg:hidden one"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50 bg-purple-50 two" />
      <DialogPanel
        class="overflow-y-auto fixed inset-y-0 right-0 z-50 px-8 py-6 w-full bg-white three lg:max-w-lg lg:ring-1 lg:ring-gray-900/10"
      >
        <!-- 顶部 Logo + 关闭按钮 -->
        <div class="flex justify-between items-center mt-8">
          <button
            type="button"
            class="inline-flex justify-center items-center p-2.5 -m-2.5 text-gray-700 rounded-md"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">close main menu</span>
            <NavigationHamburger class="w-6 h-6" />
          </button>
        </div>
        <!-- 菜单项 -->
        <div class="flow-root mt-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6 space-y-2">
              <template v-for="item in sideData" :key="item.name">
                <!-- 侧边栏链接 -->
                <a
                  v-if="item.action"
                  :href="item.href"
                  class="flex items-center px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                >
                  <component :is="item.icon" class="mr-2 w-6 h-6" />
                  {{ item.name }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>

  <!-- 介绍 -->
  <div class="cdiv">
    <div class="flex flex-row justify-between items-center">
      <p class="text-purple-300 joti-one-regular">Hi I'm Makar</p>
      <div class="hidden pr-6 lg:block">
        <label
          for="language"
          class="block text-sm font-medium text-gray-700 sr-only"
          >语言选择</label
        >
        <div class="relative">
          <select
            id="language"
            name="language"
            class="px-3 py-2 pr-8 text-sm text-gray-900 bg-purple-200 rounded-md border border-purple-200 appearance-none focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
          <ChevronDownIcon
            class="absolute right-2 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>

    <p class="homenaje-regular">
      🙌 a perpetual apprentice and now a front-end engineer with a keen
      interest in AI and its applications;<br />
      👩‍💻 I like to have fun with some new technologies and understanding their
      underlying principles
    </p>
  </div>
  <!-- 链接 -->
  <div class="flex link-div cdiv">
    <div>
      <p class="text-purple-300 homenaje-regular" style="width: 6rem">
        contact me :
      </p>
    </div>
    <!-- x.com -->
    <a
      class="flex justify-center items-center transition-colors ca rounded-box hover:bg-purple-300"
      href="https://x.com/F404Ka"
    >
      <XIcon class="w-6 h-6" />
    </a>
    <!-- github -->
    <a
      class="flex justify-center items-center transition-colors ca rounded-box hover:bg-purple-300"
      href="https://github.com/MakarF200"
    >
      <GithubIcon class="w-6 h-6" />
    </a>
    <!-- linkedin -->
    <a
      class="flex justify-center items-center transition-colors ca rounded-box hover:bg-purple-300"
      href="https://www.linkedin.com/in/wuyunyuf404/"
    >
      <LinkedinIcon class="w-6 h-6" />
    </a>
  </div>

  <div class="">
    <!-- 项目Project -->
    <div class="bg-purple-100 rounded-box">
      <div
        class="bg-purple-200 rounded-box"
        style="display: flex; padding: 0.8rem"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44 14L24 4L4 14V34L24 44L44 34V14Z"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M4 14L24 24"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 44V24"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44 14L24 24"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M34 9L14 19"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2 class="homenaje-regular" style="padding-left: 1rem">Project</h2>
      </div>
      <div class="">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            class="py-16 mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-32"
            style="padding-top: 0; padding-bottom: 2rem"
          >
            <div
              class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="projectMainDataObj in ProjectMainData"
                :key="projectMainDataObj.id"
                class="flex relative bg-purple-200 cursor-pointer group rounded-box"
                @click="projectContent(projectMainDataObj.key)"
              >
                <div
                  class="w-full transition-colors rounded-box hover:bg-purple-300"
                >
                  <img
                    :src="projectMainDataObj.showImageUrl"
                    :alt="projectMainDataObj.name"
                    class="w-full rounded-box bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                    @error="
                      handleImgError($event, projectMainDataObj.showLocImgUrl)
                    "
                  />
                  <p
                    class="mt-4 mb-4 text-sm text-center article-Douyin-Sans-1rem"
                  >
                    {{ projectMainDataObj.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="text-right" style="padding: 0 2rem 1rem 0">
        <button class="bg-purple-300 btn">More</button>
      </div> -->
    </div>
    <!-- 技能 -->
    <div class="mt-4 bg-purple-100 rounded-box">
      <div
        class="bg-purple-200 rounded-box"
        style="display: flex; padding: 0.8rem"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M35 20C38.866 20 42 16.866 42 13C42 9.13401 38.866 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
        </svg>
        <h2 class="homenaje-regular" style="padding-left: 1rem">Skill</h2>
      </div>
      <div
        v-for="skillData in SkillData"
        :key="skillData.title"
        style="padding: 0.8rem"
      >
        <div class="homenaje-regular">{{ skillData.title }}</div>
        <div style="display: flex; flex-wrap: wrap">
          <div
            v-for="data in skillData.content"
            :key="data.name"
            class="m-1 bg-purple-200 rounded-box"
            style="padding: 0.5rem"
          >
            <p class="text-gray-500 article-Douyin-Sans-1rem">
              {{ data.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// 导入svg
import LinkedinIcon from "@/../public/svg/linkedin.svg";
import GithubIcon from "@/../public/svg/github.svg";
import XIcon from "@/../public/svg/tuite-copy.svg";
// 导入store/pinia数据
import {
  StoreProjectData,
  getProjectShowImgData,
} from "@/stores/project-store";
import { StoreSkillData } from "@/stores/skill-store";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import NavigationHamburger from "@/assets/icons/navigation-hamburger.svg";
import { PiniaAsideData } from "@/stores/aside-store";
const router = useRouter();
const asideStore = PiniaAsideData();
const { sideData } = asideStore;
// 解构store
const ProjectStore = StoreProjectData();
const ProjectMainData = computed(() => ProjectStore.projectMainData);
const SkillStore = StoreSkillData();
const SkillData = computed(() => SkillStore.data);
const mobileMenuOpen = ref(false);
// project 展示数据
const handleImgError = (e: Event, locImgUrl: string) => {
  const target = e.target as HTMLImageElement;
  if (target && locImgUrl && !target.src.endsWith(locImgUrl)) {
    target.src = locImgUrl;
  }
};

// 导向项目内容页面路由
const projectContent = (type: string) => {
  getProjectShowImgData(type);
  router.push(`/project-content/${type}`);
  console.log("导向项目内容页面路由", type);
};
</script>
<style scoped>
.ca {
  width: 2.5rem;
}

/* 字体 */
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

.link-div {
  width: auto;
  margin: 0.5rem;
}

.article-Douyin-Sans-1rem {
  font-family: "Douyin Sans";
  font-weight: 700;
  font-size: 1rem;
}
</style>
