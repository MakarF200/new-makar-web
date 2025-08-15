<!-- <div>
    <h1>Web Design</h1>
    <h2>设计你的网页</h2>
    <h3>套餐卡片</h3>
    <h4>服务细则</h4>
    <h5>CTA按钮</h5>
    <h6>footer</h6>
  </div> -->

<template>
  <div class="bg-white">
    <NavigationBar />
    <main>
      <!-- 价格选择 -->
      <form class="group/tiers bg-white pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <!-- 介绍 -->
          <div class="mx-auto max-w-4xl text-center">
            <p
              class="leading-relaxed article-Douyin-Sans-5rem mt-2 text-balance text-5xl font-semibold tracking-tight !text-gray-600"
            >
              设计您的网页
            </p>
          </div>
          <p
            class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg text-gray-600 sm:text-xl/8"
          >
            在这里您可以根据您的需求来选择适合您的套餐<br />
            😇当然，您也可以只挑选您喜欢的菜单，本店加量不加价😈
          </p>
          <!-- 分类 -->
          <div class="mt-16 flex flex-wrap justify-center">
            <div
              v-for="item in priceList"
              :key="item.name"
              class="w-full lg:w-1/3 p-4"
            >
              <div
                class="rounded-lg p-4 h-full"
                :class="
                  item.isHot
                    ? 'border-purple-300 border-2'
                    : 'border-gray-300 border-2'
                "
              >
                <h3 class="article-Douyin-Sans-2rem">{{ item.name }}</h3>
                <!-- 价格框，并选择是不是hot选项 -->
                <div
                  class="py-2 flex flex-col sm:flex-row place-content-between"
                >
                  <h4 class="article-ToneOZ-YinPZ-Tsuipita-TC-2rem">
                    {{ item.price }}
                  </h4>
                  <h4
                    v-if="item.isHot"
                    class="article-Douyin-Sans-rem content-center text-red-500 font-bold bg-red-100 rounded-md px-2 py-1"
                  >
                    最受欢迎
                  </h4>
                </div>

                <h4 class="article-Douyin-Sans-rem">{{ item.toObject }}</h4>
                <p class="py-2">{{ item.introduction }}</p>
                <button
                  type="button"
                  class="rounded-md w-full bg-purple-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="webDesignPriceDetail(item.type)"
                >
                  立即购买
                </button>
                <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
                  <li
                    v-for="feature in item.featuresList"
                    :key="feature"
                    class="flex gap-x-3"
                  >
                    <CheckIcon
                      class="h-6 w-5 flex-none text-purple-600"
                      aria-hidden="true"
                    />
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
      <!-- 同行评价 -->
      <div class="mx-auto mt-24 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div
          class="relative overflow-hidden bg-gray-900 px-6 py-10 shadow-xl sm:rounded-3xl sm:px-10 sm:py-12 md:px-12 lg:px-10"
        >
          <img
            class="absolute inset-0 size-full object-cover brightness-150 saturate-0"
            alt=""
          />
          <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
          <div
            class="absolute -left-80 -top-56 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
          <div
            class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
          <div class="relative mx-auto lg:mx-0">
            <img class="h-10 w-auto" alt="" />
            <figure>
              <blockquote
                class="mt-4 text-lg font-semibold text-white sm:text-xl/8"
              >
                <p>
                  这款产品真正改变了我们的工作方式，提升了整个团队的协作效率。设计直观，功能强大，是我们日常运营中不可或缺的工具。
                </p>
                <p v-if="false">
                  English: This product has truly transformed the way we work,
                  boosting collaboration across our entire team. Its intuitive
                  design and powerful features make it an essential part of our
                  daily operations.
                </p>
              </blockquote>
              <figcaption class="mt-6 text-base text-white flex">
                <div class="mr-4">
                  <img
                    src="@/assets/images/wudequan.png"
                    alt=""
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <div class="font-semibold">吴德全</div>
                  <div class="mt-1">南昌爱酷科技CTO</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <!-- 相关问答 -->
      <div class="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div class="flex justify-center items-center">
            <h2
              class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              相关问答
            </h2>
          </div>
          <dl class="mt-16 divide-y divide-gray-900/10">
            <Disclosure
              as="div"
              v-for="faq in faqs"
              :key="faq.question"
              class="py-6 first:pt-0 last:pb-0"
              v-slot="{ open }"
            >
              <dt>
                <DisclosureButton
                  class="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span class="font-douyin font-bold text-2xl">{{
                    faq.question
                  }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      v-if="!open"
                      class="size-6"
                      aria-hidden="true"
                    />
                    <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12 flex flex-row">
                <div class="w-1 mr-2 bg-purple-200"></div>
                <p
                  class="text-base/7 text-gray-600 ml-2 font-douyin font-medium"
                  v-html="faq.answer"
                ></p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </main>
    <!-- Footer -->
    <!-- <footer class="bg-gray-900">
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <img class="h-9" alt="Company name" />
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm/6 font-semibold text-white">Solutions</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li
                    v-for="item in footerNavigation.solutions"
                    :key="item.name"
                  >
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-400 hover:text-white"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm/6 font-semibold text-white">Support</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.support" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-400 hover:text-white"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm/6 font-semibold text-white">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.company" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-400 hover:text-white"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm/6 font-semibold text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.legal" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-400 hover:text-white"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/16/solid";
import { CheckIcon } from "@heroicons/vue/24/outline";
import NavigationBar from "@/components/component-vue/navigation-bar.vue";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import type { PriceTable } from "@/types/project";
import { useRouter } from "vue-router";

// router路由配置
const router = useRouter();

// 导向价格选择页面路由
const webDesignPriceDetail = (type: string) => {
  router.push(`/freelance/web-design-content/${type}`);
};
// 页面数据
const priceList: PriceTable[] = [
  {
    name: "WEB基础设计",
    isHot: false,
    price: "2000RMB",
    toObject: "入门展示型页面",
    introduction: "适合个人介绍、小型项目展示",
    type: "level-one",
    featuresList: [
      "单页设计",
      "响应式布局",
      "简洁美观、快速上线",
      "协助部署",
      "域名配置",
    ],
  },
  {
    name: "WEB动画设计",
    isHot: true,
    price: "6000RMB",
    toObject: "标准版网站开发",
    introduction: "适合小型企业、画廊、工作室",
    type: "level-two",
    featuresList: [
      "多页面结构",
      "响应式布局",
      "艺术化动效、UI 组件优化",
      "表单收集",
      "SEO优化基础设置",
      "协助部署",
      "域名配置",
    ],
  },
  {
    name: "WEB设计PRO",
    isHot: false,
    price: "10000RMB",
    toObject: "定制版网站开发",
    introduction: "适合艺术机构、高端品牌方",
    type: "level-three",
    featuresList: [
      "多页面结构",
      "响应式布局",
      "表单收集",
      "SEO优化基础设置",
      "定制UI设计风格",
      "多语言支持",
      "后端服务接入",
      "协助部署",
      "域名配置",
      "售后支持",
    ],
  },
];
const faqs = [
  {
    question: "三个套餐有什么区别？",
    answer:
      "WEB基础设计适合个人介绍、小型项目展示；<br>WEB动画设计适合小型企业、画廊、工作室；<br>WEB设计PRO适合艺术机构、高端品牌方。",
  },
  {
    question: "包含哪些内容？",
    answer:
      "WEB基础设计提供 1 页网页设计（响应式布局），支持基础表单收集功能。<br>WEB动画设计提供 3 页网页设计（响应式布局），免费一年的表单收集功能。<br>WEB设计PRO提供 5 页网页设计（响应式布局），免费一年的表单收集功能。",
  },
  {
    question: "额外页面如何计费？",
    answer: "超出 1 页部分，每增加一页 +¥2000。",
  },
  {
    question: "是否包含域名和服务器？",
    answer: "不包含，但我们可以协助您购买和配置。",
  },
  {
    question: "是否包含长期维护？",
    answer:
      "WEB基础版不包含长期维护。<br>WEB动画版包含3个月的技术支持。<br>WEB设计PRO包含6个月的技术支持。",
  },
  {
    question: "长期维护结束后网站还能访问吗？",
    answer: "当然可以，在域名和服务器过期前，您可以继续使用。 ",
  },
  {
    question: "是否包含SEO优化？",
    answer:
      "WEB基础设计不包含，WEB动画设计包含基础SEO优化，WEB设计PRO包含SEO优化基础设置。",
  },
  {
    question: "多久能完成？",
    answer:
      "WEB基础设计与开发周期约 3-5 个工作日（具体视需求而定）。<br>WEB动画设计与开发周期约 5-7 个工作日（视动画复杂度调整）。<br>WEB设计PRO开发周期约 7-15 个工作日（视需求复杂度调整）。",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "首页", href: "/" },
  { name: "返回", href: "#", action: "back" },
];
</script>
<style>
/* 导入艺术字 */
.article-Douyin-Sans-rem {
  font-family: "Douyin Sans";
  font-weight: 700;
  font-size: 1rem;
}
.article-Douyin-Sans-2rem {
  font-family: "Douyin Sans";
  font-weight: 1700;
  font-size: 2rem;
}
.article-Douyin-Sans-5rem {
  font-family: "Douyin Sans";
  font-weight: 700;
  font-size: 5rem;
}
.article-ToneOZ-YinPZ-Tsuipita-TC-5rem {
  font-family: "ToneOZ-YinPZ-Tsuipita-TC";
  font-weight: 400;
  font-size: 5rem;
  font-style: normal;
}
.article-ToneOZ-YinPZ-Tsuipita-TC-2rem {
  font-family: "ToneOZ-YinPZ-Tsuipita-TC";
  font-weight: 400;
  font-size: 2rem;
  font-style: normal;
}
</style>
