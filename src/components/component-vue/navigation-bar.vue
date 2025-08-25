<template>
  <div class="">
    <nav
      class="flex justify-between items-center p-6 mx-auto mt-4 max-w-7xl lg:px-8 rounded-box"
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
      <div class="hidden lg:flex lg:gap-x-12">
        <button
          type="button"
          @click="router.back()"
          class="px-3 py-2 text-sm font-semibold text-white bg-purple-200 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          返回
        </button>
      </div>
      <!-- 消息弹窗插槽 -->
      <div>
        <transition name="fade">
          <div v-if="props.showMessage">
            <div class="flex justify-center items-center">
              <div class="flex justify-center items-center">
                <slot
                  name="message"
                  :message="props.messageContent"
                  :type="props.messageType"
                >
                  <p>{{ props.messageContent }}</p>
                </slot>
              </div>
            </div>
          </div>
        </transition>
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
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { Dialog, DialogPanel } from "@headlessui/vue";
import NavigationHamburger from "@/assets/icons/navigation-hamburger.svg";
import { PiniaAsideData } from "@/stores/aside-store";

// 定义插槽的 props
interface Props {
  showMessage?: boolean;
  messageContent?: string;
  messageType?: "error" | "remind" | "";
}

const props = withDefaults(defineProps<Props>(), {
  showMessage: false,
  messageContent: "",
  messageType: "",
});

const router = useRouter();
// 汉堡包菜单开关
const mobileMenuOpen = ref(false);

const asideStore = PiniaAsideData();
const { sideData } = asideStore;
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
