<template>
  <div class="py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Makar's Project
        </h2>
        <p class="mt-2 text-lg/8 text-gray-600">
          Here you can see Makar creative with some project and fun games
        </p>
      </div>
      <div>
        <div class="flex bg-purple-100 rounded-box h-auto mt-4 mb-4">
          <div class="flex items-center w-80 place-content-center">
            <img
              class="size-16 rounded-full"
              src="/public/png/MES-KuTangGuo.png"
              alt=""
            />
          </div>
          <div class="p-3">
            <div class="flex place-content-between">
              <p class="bg-purple-300 rounded-box w-10 text-center">EN:</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 6H42V20"
                  stroke="#333"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6"
                  stroke="#333"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.7998 22.1999L41.0998 6.8999"
                  stroke="#333"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>
              This is a comprehensive internal management solution designed
              specifically for small and medium-sized enterprises in the
              discrete manufacturing industry in China. It aims to optimize
              production processes, improve resource allocation, and enhance
              production and operational efficiency through digitalization.
            </p>
            <p class="bg-purple-300 rounded-box w-10 text-center">CH:</p>
            <p>
              这是一个综合性公司内部管理解决方案，专为国内离散制造业的中小企业设计，旨在通过数字化手段
              优化生产流程，提升资源配置和生产运营效率。
            </p>
          </div>
        </div>
        <div class="flex bg-purple-100 rounded-box h-auto mt-4 mb-4">
          <div class="flex items-center w-80 ml-2 place-content-center">
            <img
              src="/public/png/Four-wheeled-survey-trolley.png"
              alt="四轮勘测小车"
              border="0"
            />
          </div>
          <div class="p-3">
            <div class="flex place-content-between">
              <p class="bg-purple-300 rounded-box w-10 text-center">EN:</p>
              <RouterLink to="fourwheeled">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 6H42V20"
                    stroke="#333"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6"
                    stroke="#333"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.7998 22.1999L41.0998 6.8999"
                    stroke="#333"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </RouterLink>
            </div>
            <p>
              Design the transmission, steering, and suspension systems for an
              exploration vehicle. On the basis of meeting design requirements,
              aim for a lighter overall weight. Specifically, design the
              transmission system structure for a four-wheel steering mode.
            </p>
            <p class="bg-purple-300 rounded-box w-10 text-center">CH:</p>
            <p>
              设计勘探车的传动、转向、悬挂系统，在设计要求的基础上追求较
              轻的质量，针对四轮转向模式，设计传动系统结构，
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
</script>
