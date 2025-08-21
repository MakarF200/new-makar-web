<template>
  <!-- 导航栏 -->
  <div class="block lg:hidden">
    <nav
      class="mx-auto flex flex-row max-w-7xl items-center lg:justify-end justify-between p-6 lg:px-8 mt-4 rounded-box"
      aria-label="Global"
    >
      <!-- 汉堡包按钮 -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <NavigationHamburger class="h-6 w-6" />
        </button>
      </div>
      <!-- 返回按钮 -->
      <div class="hidden">
        <button
          type="button"
          @click="router.back()"
          class="rounded-md bg-purple-200 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
            class="appearance-none rounded-md border border-purple-200 bg-purple-200 px-3 py-2 pr-8 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
          <ChevronDownIcon
            class="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
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
      <div class="fixed inset-0 z-50 two bg-purple-50" />
      <DialogPanel
        class="fixed px-8 inset-y-0 three right-0 z-50 w-full overflow-y-auto bg-white py-6 lg:max-w-lg lg:ring-1 lg:ring-gray-900/10"
      >
        <!-- 顶部 Logo + 关闭按钮 -->
        <div class="flex items-center justify-between mt-8">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">close main menu</span>
            <NavigationHamburger class="h-6 w-6" />
          </button>
        </div>
        <!-- 菜单项 -->
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <template v-for="item in sideData" :key="item.name">
                <!-- 侧边栏链接 -->
                <a
                  v-if="item.action"
                  :href="item.href"
                  class="-mx-3 flex items-center rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                >
                  <component :is="item.icon" class="w-6 h-6 mr-2" />
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
      <p class="joti-one-regular text-purple-300">Hi I'm Makar</p>
      <div class="hidden lg:block pr-6">
        <label
          for="language"
          class="block text-sm font-medium text-gray-700 sr-only"
          >语言选择</label
        >
        <div class="relative">
          <select
            id="language"
            name="language"
            class="appearance-none rounded-md border border-purple-200 bg-purple-200 px-3 py-2 pr-8 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
          <ChevronDownIcon
            class="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
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
  <!-- TODO: add links , pleaseeee  -->
  <div class="flex link-div cdiv">
    <div>
      <p class="homenaje-regular text-purple-300" style="width: 6rem">
        contact me :
      </p>
    </div>
    <!-- x.com -->
    <a class="ca" href="https://x.com/F404Ka">
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"
          fill="none"
          stroke="#333"
          stroke-width="4"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <!-- github -->
    <a class="ca" href="https://github.com/Tunny-F404">
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </a>
    <!-- weChat -->
    <!-- <a class="ca">
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516"
          fill="none" />
        <path
          d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516"
          stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z"
          fill="#333" />
        <path
          d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z"
          fill="#333" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728"
          fill="none" />
        <path
          d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728"
          stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0024 35.9728L43 42L38.7618 39.9293" fill="none" />
        <path d="M42.0024 35.9728L43 42L38.7618 39.9293" stroke="#333" stroke-width="4" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z"
          fill="#333" />
        <path
          d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z"
          fill="#333" />
      </svg>
    </a> -->
    <!-- email -->
    <!-- <a class="ca">
    
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 24V9H24H4V24V39H24" stroke="#333" stroke-width="4" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M44 34L30 34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M39 29L44 34L39 39" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 9L24 24L44 9" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a> -->
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
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"
            style="padding-top: 0; padding-bottom: 2rem"
          >
            <div
              class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="projectMainDataObj in ProjectMainData"
                :key="projectMainDataObj.id"
                class="group relative bg-purple-200 rounded-xl flex"
              >
                <RouterLink :to="projectMainDataObj.key">
                  <img
                    :src="projectMainDataObj.showImageUrl"
                    alt=""
                    class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                  />
                  <p class="mt-4 mb-4 text-sm text-gray-500 text-center">
                    {{ projectMainDataObj.name }}
                  </p>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right" style="padding: 0 2rem 1rem 0">
        <button class="btn bg-purple-300">More</button>
      </div>
    </div>
    <!-- 技能 -->
    <div class="bg-purple-100 rounded-box mt-4">
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
            class="bg-purple-200 rounded-box m-1"
            style="padding: 0.5rem"
          >
            <div>{{ data.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// 导入store/pinia数据
import { StoreProjectData } from "@/stores/project-store";
import { StoreSkillData } from "@/stores/skill-store";
import { computed, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
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
</style>
