<template>
  <div class="flex items-stretch bg-purple-100 rounded-box h-full">
    <div class="inline-block rounded-box bg-purple-200">
      <ul class="menu">
        <li @click="dynamicData('basicView', true)">
          <RouterLink to="home" class="px-0">
            <a class="tooltip tooltip-right pr-2 pl-2" data-tip="Home">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18V42H39V18L24 6L9 18Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M19 29V42H29V29H19Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
                <path d="M9 42H39" stroke="#333" stroke-width="4" stroke-linecap="round" />
              </svg>
            </a>
          </RouterLink>
        </li>
        <li @click="dynamicData('basicView', true)">
          <RouterLink to="project" class="px-0">
            <a class="tooltip tooltip-righ pr-2 pl-2" data-tip="Project">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 14L24 4L4 14V34L24 44L44 34V14Z" stroke="#333" stroke-width="4" stroke-linejoin="round" />
                <path d="M4 14L24 24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24 44V24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M44 14L24 24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 9L14 19" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="blog" class="px-0">
            <a class="tooltip tooltip-right pr-2 pl-2" data-tip="Blog">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z"
                  fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
                <path
                  d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7"
                  stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 37H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="ant" class="px-0">
            <a class="tooltip tooltip-right pr-2 pl-2" data-tip="Ant">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z"
                  fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
                <path
                  d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7"
                  stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 37H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="flex-1 overflow-y-scroll">
      <ul class="menu menu-xs rounded-lg w-full p-0">
        <li class="w-full" v-for="gradeOne in blogMenuData" :key="gradeOne.title">
          <details open>
            <summary>
              <div>{{ gradeOne.title }}</div>
            </summary>
            <ul>
              <li v-for="gradeTwo in gradeOne.content" :key="gradeTwo.title">
                <details>
                  <summary>
                    <div>{{ gradeTwo.title }}</div>
                  </summary>
                  <ul>
                    <li v-for="gradeThree in gradeTwo.content" :key="gradeThree.title"
                      @click="blogStore.changeMdData(gradeThree.id)">
                      <RouterLink to="bcontent">
                        <div>
                          {{ gradeThree.title }}
                        </div>
                      </RouterLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { PiniaAsideData } from "@/stores/aside-store";
import { PiniaBlogData } from "@/stores/blog-store";
// 导入pinia数据
const asideStore = PiniaAsideData();
const blogStore = PiniaBlogData();
const blogMenuData = computed(() => blogStore.mdMenu);
// 修改侧边栏呈现值
function dynamicData(
  name: "basicView" | "minView" | "blogView",
  data: boolean
) {
  asideStore.modifyViewData("blogView", false);
  asideStore.modifyViewData(name, data);
}
onMounted(() => {
  blogStore.getUrlHtmlObj();
});
</script>
