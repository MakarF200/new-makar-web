<template>
  <ul class="menu bg-purple-200 rounded-box h-full">
    <li class="p-1">
      <RouterLink to="home">
        <svg
          width="20"
          height="20"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18V42H39V18L24 6L9 18Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 29V42H29V29H19Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M9 42H39"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
        Home
      </RouterLink>
    </li>
    <li class="p-1">
      <RouterLink to="project">
        <svg
          width="20"
          height="20"
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
        Project
      </RouterLink>
    </li>
    <li class="p-1" @click="dynamicData('blogView', true)">
      <RouterLink to="blog">
        <svg
          width="20"
          height="20"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 37H34"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Blog
      </RouterLink>
    </li>
    <li class="p-1">
      <RouterLink to="test">
        <svg
          width="20"
          height="20"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 37H34"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Test
      </RouterLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { PiniaAsideData } from "@/stores/aside-store";

const asideStore = PiniaAsideData();
const asideData = computed(() => asideStore.dynamicViewData);
const { modifyViewData } = asideStore;

function dynamicData(
  name: "basicView" | "minView" | "blogView",
  data: boolean
) {
  modifyViewData("basicView", false);
  modifyViewData(name, data);
}
</script>
