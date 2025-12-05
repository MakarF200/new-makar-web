<template>
  <div
    class="px-4 py-10 min-h-screen font-sans text-gray-900 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div
      class="p-8 mx-auto max-w-4xl bg-white border border-gray-100 shadow-sm sm:p-12"
    >
      <!-- 语言切换模块 -->
      <div class="flex justify-end mb-6 space-x-2 print:hidden">
        <button
          v-for="langKey in ['en', 'zh', 'tw']"
          :key="langKey"
          @click="currentLang = langKey"
          :class="[
            'px-3 py-1 text-sm font-medium rounded-md transition-colors',
            currentLang === langKey
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          {{ langNames[langKey] }}
        </button>
      </div>

      <!-- 头部信息模块 -->
      <header class="pb-8 mb-12 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h1
            class="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            {{ data.header.name }}
          </h1>
          <div>
            <button
              class="rounded-full btn btn-primary btn-2xl"
              @click="downloadResume"
            >
              {{ data.download.text }}
            </button>
          </div>
        </div>
        <p class="mb-6 text-xl font-medium text-gray-600">
          {{ data.header.title }}
        </p>

        <div
          class="flex flex-col gap-y-2 gap-x-6 text-sm text-gray-600 sm:flex-row sm:flex-wrap"
        >
          <div class="flex items-center">
            <span class="mr-2 font-semibold">{{
              data.header.info.details
            }}</span>
          </div>
          <div class="flex items-center">
            <span class="ml-2">📱</span> {{ data.header.info.phone }}
          </div>
          <div class="flex items-center">
            <span class="ml-2">📧</span>
            <a
              :href="`mailto:${data.header.info.email}`"
              class="transition-colors hover:text-blue-600"
              >{{ data.header.info.email }}</a
            >
          </div>
          <div class="flex items-center">
            <span class="ml-2">🌐</span>
            <a
              :href="`https://${data.header.info.website}`"
              target="_blank"
              class="transition-colors hover:text-blue-600"
              >{{ data.header.info.website }}</a
            >
          </div>
        </div>
      </header>

      <!-- 个人总结模块 -->
      <section class="mb-12">
        <h2
          class="pb-2 mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          {{ data.summary.title }}
        </h2>
        <p
          class="leading-relaxed text-gray-700"
          v-html="data.summary.content"
        ></p>
      </section>

      <!-- 求职意向模块 -->
      <section class="mb-12">
        <h2
          class="pb-2 mt-4 mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          {{ data.intention.title }}
        </h2>
        <ul
          class="flex justify-between pl-2 space-y-1 list-disc list-inside text-gray-700"
        >
          <li v-for="(item, index) in data.intention.items" :key="index">
            <PointIcon class="inline-block w-4 h-4 align-text-bottom" />
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- 教育背景模块 -->
      <section class="mb-12">
        <h2
          class="pb-2 mt-4 mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          {{ data.education.title }}
        </h2>
        <div class="mb-4">
          <div
            class="flex flex-col justify-between mb-1 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-xl font-bold text-gray-800">
              {{ data.education.school }}
            </h3>
            <span class="font-medium text-gray-600">{{
              data.education.time
            }}</span>
          </div>
          <div class="mb-2 font-medium text-gray-700">
            {{ data.education.degree }}
          </div>
          <ul
            class="pl-2 space-y-1 text-sm list-disc list-inside text-gray-600"
          >
            <li v-for="(detail, index) in data.education.details" :key="index">
              <PointIcon class="inline-block w-4 h-4 align-text-bottom" />
              {{ detail }}
            </li>
          </ul>
        </div>
      </section>

      <!-- 项目经验模块 -->
      <section class="mb-12">
        <h4
          class="pb-2 mb-8 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          {{ data.projects.title }}
        </h4>

        <div
          v-for="(project, index) in data.projects.items"
          :key="index"
          :class="[
            'mb-12 last:mb-0',
            index > 0 ? 'pt-10 border-t border-gray-100' : '',
          ]"
        >
          <div
            class="flex flex-col justify-between mb-3 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-2xl font-bold text-gray-900">
              {{ project.title }}
            </h3>
            <span
              v-if="project.subtitle"
              class="px-3 py-1 mt-2 text-sm font-medium text-gray-600 bg-gray-100 rounded sm:mt-0 w-fit"
              >{{ project.subtitle }}</span
            >
          </div>

          <div v-if="project.link" class="mb-4">
            <a
              :href="project.link.url"
              target="_blank"
              class="flex items-center text-sm font-semibold text-blue-700 hover:underline"
            >
              <span class="mr-1">🔗</span> {{ project.link.text }}
            </a>
          </div>

          <div class="p-4 mb-5 space-y-2 text-sm bg-gray-50 rounded-md">
            <div class="flex flex-col sm:flex-row sm:gap-2">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >{{ data.labels.impact }}</span
              >
              <span class="text-gray-700" v-html="project.impact"></span>
            </div>
            <div class="flex flex-col mt-2 sm:flex-row sm:gap-2 sm:mt-0">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >{{ data.labels.techStack }}</span
              >
              <span class="text-gray-700">{{ project.techStack }}</span>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="mb-2 text-base font-bold text-gray-900">
              {{ data.labels.overview }}
            </h4>
            <p class="text-gray-700" v-html="project.overview"></p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <div v-if="project.responsibilities">
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                {{ project.responsibilities.title }}
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li
                  v-for="(item, rIndex) in project.responsibilities.items"
                  :key="rIndex"
                >
                  <PointIcon class="inline-block w-4 h-4 align-text-bottom" />
                  <span v-html="item"></span>
                </li>
              </ul>
            </div>
            <div v-if="project.results">
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                {{ project.results.title }}
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li
                  v-for="(item, resIndex) in project.results.items"
                  :key="resIndex"
                >
                  <PointIcon class="inline-block w-4 h-4 align-text-bottom" />
                  <span v-html="item"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 工作经历模块 -->
      <section class="mb-12">
        <h2
          class="pb-2 mb-6 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          {{ data.work.title }}
        </h2>
        <div v-for="(job, index) in data.work.items" :key="index">
          <div
            class="flex flex-col justify-between mb-2 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-xl font-bold text-gray-900">
              {{ job.title }}
            </h3>
            <span class="font-medium text-gray-600">{{ job.subtitle }}</span>
          </div>
          <ul
            class="pl-2 space-y-1 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
          >
            <li v-for="(item, cIndex) in job.content" :key="cIndex">
              <PointIcon class="inline-block w-4 h-4 align-text-bottom" />
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

      <!-- 实习经历模块 -->
      <section class="mb-12">
        <h2
          class="pb-2 mb-6 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          {{ data.internship.title }}
        </h2>
        <div v-for="(intern, index) in data.internship.items" :key="index">
          <div
            class="flex flex-col justify-between mb-2 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-xl font-bold text-gray-900">
              {{ intern.title }}
            </h3>
            <span class="font-medium text-gray-600">{{ intern.subtitle }}</span>
          </div>
          <ul
            class="pl-2 space-y-1 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
          >
            <li v-for="(item, cIndex) in intern.content" :key="cIndex">
              <PointIcon class="inline-block w-4 h-4 align-text-bottom" />
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

      <!-- 技术技能模块 -->
      <section>
        <h2
          class="pb-2 mb-6 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          {{ data.skills.title }}
        </h2>
        <div class="grid gap-y-6 gap-x-12 sm:grid-cols-2">
          <div v-for="(skill, index) in data.skills.items" :key="index">
            <h4 class="mb-2 text-sm font-bold text-gray-900">
              {{ skill.title }}
            </h4>
            <p class="text-sm text-gray-700">
              {{ skill.content }}
            </p>
          </div>
        </div>
      </section>

      <!-- 页脚模块 -->
      <div
        class="pt-8 mt-16 text-sm text-center text-gray-400 border-t border-gray-200"
      >
        <p>© {{ new Date().getFullYear() }} {{ data.footer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入依赖
import { ref, computed } from "vue";
import PointIcon from "@/../public/svg/point.svg";
import { resumeData } from "./resume-data";

// 当前语言状态
const currentLang = ref("en");
// 计算当前语言对应的简历数据
const data = computed(() => resumeData[currentLang.value]);

// 语言名称映射
const langNames: Record<string, string> = {
  en: "English",
  zh: "简体中文",
  tw: "繁體中文",
};

// 下载简历功能
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = data.value.download.url;
  link.download = data.value.download.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
/* 打印样式适配 */
@media print {
  .min-h-screen {
    padding: 0;
    background: white;
  }
  .max-w-4xl {
    max-width: 100%;
    box-shadow: none;
    border: none;
    padding: 0;
  }
  .print\:hidden {
    display: none;
  }
}
</style>
