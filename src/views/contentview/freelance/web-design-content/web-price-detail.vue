<template>
  <div class="">
    <!-- 导航栏 -->
    <NavigationBar
      :show-message="ifErrMessage"
      :message-content="message"
      :message-type="messageType"
    >
      <template #message="{ message, type }">
        <div
          class="flex justify-center items-center bg-white rounded-lg border-2 shadow-lg"
          :class="getMessageContainerClass(type)"
        >
          <component :is="getMessageIcon(type)" class="mr-2 w-6 h-6" />
          <p class="text-lg font-semibold" :class="getMessageTextClass(type)">
            {{ message }}
          </p>
        </div>
      </template>
    </NavigationBar>
    <div class="flex justify-center items-center p-4">
      <h2 class="text-3xl font-bold font-douyin">定制您的网页</h2>
    </div>
    <!-- 内容 -->
    <div
      class="flex flex-col mx-auto max-w-7xl border-t-2 border-purple-200 lg:flex-row"
    >
      <!-- 左内容 -->
      <div class="hidden flex-col justify-between w-full lg:w-1/2 lg:flex">
        <div>
          <div class="flex flex-col justify-center items-center p-6">
            <p class="text-lg font-douyin">这里选择您的套餐</p>
          </div>
          <div>
            <div class="p-4" v-for="(item, key) in packageData" :key="key">
              <button
                type="button"
                class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="
                  selectPackage(item.id, item.basePrice, item.includedPages)
                "
                :class="
                  userData.packageName === item.id
                    ? 'bg-purple-200 border-purple-300'
                    : ''
                "
              >
                {{ item.name }}
              </button>
            </div>
            <!-- 测试按钮 -->
            <!-- <div>
              <button @click="test">test</button>
            </div> -->
          </div>
        </div>
        <div
          class="flex justify-center items-center py-12 mx-4 rounded-xl border-4 border-purple-200"
        >
          <h2 class="text-3xl font-bold font-douyin">
            {{ userData.webPrice }} RMB
          </h2>
        </div>
      </div>
      <!-- 右内容 -->
      <div class="w-full lg:w-1/2 overflow-y-auto h-[calc(100vh-14.5rem)]">
        <div class="flex flex-col justify-center items-center p-6">
          <p class="text-lg font-douyin">这里选择套餐的详细内容</p>
        </div>
        <div>
          <div class="flex justify-center items-center">
            <h2
              class="px-4 py-2 text-lg font-bold border-b-4 border-purple-200 font-douyin"
            >
              页面类型
            </h2>
          </div>
          <div
            class="p-2"
            v-for="(item, key) in webDesignDataList.webType"
            :key="key"
          >
            <button
              type="button"
              class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="userData.webType = item"
              :class="
                userData.webType === item
                  ? 'bg-purple-200 border-purple-300'
                  : ''
              "
            >
              {{ item }}
            </button>
          </div>
          <div class="p-2">
            <input
              type="text"
              placeholder="页面类型备注"
              class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              v-model="userData.webTypeIntroduction"
            />
          </div>
          <div class="p-2">
            <div class="flex justify-center items-center p-8">
              <h2
                class="px-4 py-2 text-lg font-bold border-b-4 border-purple-200 font-douyin"
              >
                页面数量
              </h2>
            </div>
            <div>
              <div class="flex gap-2">
                <input
                  type="number"
                  class="px-3.5 py-2.5 w-1/3 h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  v-model="userData.webPages"
                />
                <div class="flex gap-2 w-2/3">
                  <button
                    @click="pagesFunction('add')"
                    type="button"
                    class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    +
                  </button>
                  <button
                    @click="pagesFunction('sub')"
                    type="button"
                    class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center items-center p-8">
              <h2
                class="px-4 py-2 text-lg font-bold border-b-4 border-purple-200 font-douyin"
              >
                页面风格
              </h2>
            </div>
            <div>
              <div
                class="p-2"
                v-for="item in webDesignDataList.webStyle"
                :key="item"
              >
                <button
                  type="button"
                  class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="userData.webStyle = item"
                  :class="
                    userData.webStyle === item
                      ? 'bg-purple-200 border-purple-300'
                      : ''
                  "
                >
                  {{ item }}
                </button>
              </div>
              <div class="p-2">
                <input
                  type="text"
                  placeholder="页面风格备注"
                  class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  v-model="userData.webStyleIntroduction"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center items-center p-8">
              <h2
                class="px-4 py-2 text-lg font-bold border-b-4 border-purple-200 font-douyin"
              >
                技术支持
              </h2>
            </div>
            <div>
              <div
                class="p-2"
                v-for="item in webDesignDataList.technicalSupport"
                :key="item"
              >
                <button
                  type="button"
                  class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="technicalSupport(item)"
                  :class="
                    userData.technicalSupport.includes(item)
                      ? 'bg-purple-200 border-purple-300'
                      : ''
                  "
                >
                  {{ item }}
                </button>
              </div>
              <div class="p-2">
                <input
                  type="text"
                  placeholder="技术支持备注"
                  class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  v-model="userData.technicalSupportIntroduction"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center items-center p-8">
              <h2
                class="px-4 py-2 text-lg font-bold border-b-4 border-purple-200 font-douyin"
              >
                联系方式
              </h2>
            </div>
            <div class="p-2">
              <input
                type="text"
                placeholder="怎么称呼您"
                class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                v-model="userData.contactDetails.name"
              />
            </div>
            <div class="p-2">
              <input
                type="text"
                placeholder="联系您的邮箱或手机号"
                class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                v-model="userData.contactDetails.emailOrPhone"
              />
            </div>
            <div class="p-2">
              <input
                type="text"
                placeholder="备注您的需求"
                class="px-3.5 py-2.5 w-full h-20 text-sm font-semibold text-white rounded-md border-2 border-gray-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                v-model="userData.contactDetails.otherMessage"
              />
            </div>
          </div>
        </div>
        <!-- 提交 -->
        <div class="flex justify-center items-center p-8 mb-8">
          <button
            type="button"
            class="px-3.5 py-2.5 w-40 h-40 text-sm font-semibold text-white bg-purple-100 rounded-full border-2 border-purple-300 shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="inSubmit"
          >
            提交
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import NavigationBar from "@/components/component-vue/navigation-bar.vue";
import type {
  PackageData,
  WebDesignData,
  WebDesignDataList,
} from "@/types/project";
import { submitWebDesignData } from "@/utils/form-utils";
import YesIcon from "@/assets/icons/yes.svg";
import NoIcon from "@/assets/icons/no.svg";

const route = useRoute();

// 消息弹窗数据
const ifErrMessage = ref<boolean>(false);
const messageType = ref<"error" | "remind" | "">("error");
const message = ref<string>("");

// 消息样式处理方法
const getMessageContainerClass = (type: string) => {
  if (type === "error") {
    return "border-red-300 bg-red-50";
  } else if (type === "remind") {
    return "border-green-300 bg-green-50";
  }
};

const getMessageIcon = (type: string) => {
  if (type === "error") {
    return NoIcon;
  } else if (type === "remind") {
    return YesIcon;
  }
};

const getMessageTextClass = (type: string) => {
  if (type === "error") {
    return "text-red-700";
  } else if (type === "remind") {
    return "text-green-700";
  } else {
    return "text-gray-700";
  }
};
/**
 * 左侧数据
 */
// 套餐类型和对应函数

const selectPackage = (
  packageName: string,
  packagePrice: number,
  packagePages: number
) => {
  userData.value.packageName = packageName;
  userData.value.webPages = packagePages;
  userData.value.webPrice = packagePrice;
  showMessage("以修改套餐对应的页面数据", "remind");
};
// 套餐数据
const packageData = ref<Record<string, PackageData>>({
  "level-one": {
    name: "WEB基础设计",
    id: "level-one",
    basePrice: 2000,
    includedPages: 1,
    extraPagePrice: 2000,
    description: "基础套餐，包含1个页面，价格为2000元",
    technicalSupport: [],
  },
  "level-two": {
    name: "WEB动画设计",
    id: "level-two",
    basePrice: 6000,
    includedPages: 3,
    extraPagePrice: 2000,
    description: "动画套餐，包含3个页面，价格为6000元",
    technicalSupport: ["表单发送"],
  },
  "level-three": {
    name: "WEB设计PRO",
    id: "level-three",
    basePrice: 10000,
    includedPages: 5,
    extraPagePrice: 2000,
    description: "专业套餐，包含5个页面，价格为10000元",
    technicalSupport: ["表单发送"],
  },
});
/**
 * 右侧数据
 */
// 临时数据，用于存放页面和技术支持的临时价格
const shortTimeTechnicalSupportPrice = ref<number>(0);
const shortTimeWebPagesPrice = ref<number>(0);
// 用户选择的套餐数据
const userData = ref<WebDesignData>({
  packageName: "",
  webType: "",
  webTypeIntroduction: "",
  webPrice: 0,
  webPages: 1,
  webStyle: "",
  webStyleIntroduction: "",
  technicalSupport: [],
  technicalSupportIntroduction: "",
  contactDetails: {
    name: "",
    emailOrPhone: "",
    otherMessage: "",
  },
});
/**
 * @function technicalSupport
 * @description 判断技术支持是否存在，存在则删除，不存在则添加,并计算临时价格
 * @param type 技术支持类型数据
 */
const technicalSupport = (type: string) => {
  if (type === "无") {
    if (userData.value.technicalSupport.includes(type)) {
      const index = userData.value.technicalSupport.indexOf(type);
      userData.value.technicalSupport.splice(index, 1);
    } else {
      userData.value.technicalSupport = [];
      userData.value.technicalSupport.push(type);
      shortTimeTechnicalSupportPrice.value = 0;
    }
  } else {
    if (userData.value.technicalSupport.includes(type)) {
      const index = userData.value.technicalSupport.indexOf(type);
      userData.value.technicalSupport.splice(index, 1);
      if (type === "表单发送") {
        shortTimeTechnicalSupportPrice.value -= 1800;
      } else if (type === "在线客服") {
        shortTimeTechnicalSupportPrice.value -= 15000;
      } else if (type === "多语言支持") {
        shortTimeTechnicalSupportPrice.value -= 1500;
      } else if (type === "其他") {
        shortTimeTechnicalSupportPrice.value -= 0;
      }
    } else {
      if (userData.value.technicalSupport.includes("无")) {
        const index = userData.value.technicalSupport.indexOf("无");
        userData.value.technicalSupport.splice(index, 1);
      }
      userData.value.technicalSupport.push(type);
      if (type === "表单发送") {
        shortTimeTechnicalSupportPrice.value += 1800;
      } else if (type === "在线客服") {
        shortTimeTechnicalSupportPrice.value += 15000;
      } else if (type === "多语言支持") {
        shortTimeTechnicalSupportPrice.value += 1500;
      } else if (type === "其他") {
        shortTimeTechnicalSupportPrice.value += 0;
      }
    }
  }
  userData.value.webPrice =
    packageData.value[userData.value.packageName].basePrice +
    shortTimeTechnicalSupportPrice.value +
    shortTimeWebPagesPrice.value;
};
// 可供选择的网页数据
const webDesignDataList = ref<WebDesignDataList>({
  webType: [
    "企业官网",
    "个人作品集",
    "产品展示页",
    "博客/内容网站",
    "一页式介绍页",
    "其他",
  ],
  webTypeIntroduction: "",
  webPages: ["1", "2", "3", "4", "5", "6", "7"],
  webStyle: [
    "极简主义",
    "艺术感",
    "企业风",
    "扁平化",
    "复古风",
    "暗黑模式",
    "其他",
  ],
  webStyleIntroduction: "",
  technicalSupport: ["无", "表单发送", "在线客服", "多语言支持", "其他"],
  technicalSupportIntroduction: "",
});

/**
 * @description showMessage 显示消息
 * @param msg 消息内容
 * @param duration 消息显示时间
 */
// 创建显示消息的函数
const timer = ref<number | null>(null);
const showMessage = (msg: string, type: "error" | "remind") => {
  message.value = msg;
  ifErrMessage.value = true;
  messageType.value = type;

  // 清除之前的定时器（如果有的话）
  if (timer.value) {
    clearTimeout(timer.value);
  }

  // 设置新的定时器
  timer.value = setTimeout(() => {
    console.log("is going 4s", message.value);
    ifErrMessage.value = false;
    message.value = "";
    messageType.value = "";
  }, 4000) as unknown as number;
};

/**
 * @function inSubmit
 * @description 提交数据
 */
const inSubmit = async () => {
  if (ifComplete()) {
    try {
      // 准备提交的数据
      const submitData = {
        ...userData.value,
        submitTime: new Date().toISOString(),
        packageDetails: packageData.value[userData.value.packageName],
      };

      // 使用 submitWebDesignData 函数提交数据
      const response = await submitWebDesignData(submitData, "getform");

      if (response.ok) {
        showMessage("提交成功！我们会尽快与您联系", "remind");
        console.log(response, "response,ok");
        // 可以在这里重置表单或跳转到其他页面
        // router.push('/success');
      } else {
        showMessage("提交失败，请稍后重试", "error");
        console.log(response, "response,error");
      }
    } catch (error) {
      console.error("提交错误:", error);
      showMessage("提交失败，请检查网络连接", "error");
    }
  }
};

/**
 * @function ifComplete
 * @description 判断数据是否完整
 */
const ifComplete = () => {
  if (userData.value.packageName === "") {
    showMessage("请选择套餐", "error");
    return false;
  }
  if (userData.value.webType === "") {
    showMessage("请选择页面类型", "error");
    return false;
  }
  if (userData.value.webPages <= 1) {
    showMessage("页面数量不能小于或等于0", "error");
    return false;
  }
  if (userData.value.webStyle === "") {
    showMessage("请选择页面风格", "error");
    return false;
  }
  if (userData.value.technicalSupport.length === 0) {
    showMessage("请选择技术支持", "error");
    return false;
  }
  if (userData.value.contactDetails.name === "") {
    showMessage("请填写您的称呼", "error");
    return false;
  }
  if (userData.value.contactDetails.emailOrPhone === "") {
    showMessage("请填写您的联系方式", "error");
    return false;
  }
  return true;
};
/**
 * @function pagesFunction
 * @description 更改页面数量并计算相应的价格
 */

const pagesFunction = (operate: string) => {
  if (operate === "add") {
    userData.value.webPages++;
  }
  if (operate === "sub") {
    if (userData.value.webPages <= 1) {
      showMessage("页面数量不能为小于1", "error");
      return;
    } else {
      userData.value.webPages--;
    }
  }
  if (
    userData.value.webPages >=
    packageData.value[userData.value.packageName].includedPages
  ) {
    const pages =
      userData.value.webPages -
      packageData.value[userData.value.packageName].includedPages;
    shortTimeWebPagesPrice.value =
      pages * packageData.value[userData.value.packageName].extraPagePrice;
  }
  userData.value.webPrice =
    packageData.value[userData.value.packageName].basePrice +
    shortTimeTechnicalSupportPrice.value +
    shortTimeWebPagesPrice.value;
  console.log(
    userData.value.webPages,
    userData.value.webPrice,
    "userData:pages:price"
  );
};
// 组建加载时，获取套餐数据
onMounted(async () => {
  try {
    const inType = route.params.type as string;
    userData.value.packageName = inType;
    userData.value.webPrice = packageData.value[inType].basePrice;
    userData.value.webPages = packageData.value[inType].includedPages;
    console.log(userData.value);
  } catch (error) {
    console.log(error);
  }
});
</script>
<style scoped>
/* 进入动画：从右到左 */
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* 离开动画：从左到右 */
.slide-right-leave-active {
  transition: all 0.3s ease-in;
}

.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
