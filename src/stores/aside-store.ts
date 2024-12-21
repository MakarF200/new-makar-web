import { ref } from "vue";
import { defineStore } from "pinia";

export const PiniaAsideData = defineStore("asideData", () => {
  const dynamicViewData = ref<{
    basicView: boolean;
    minView: boolean;
    blogView: boolean;
  }>({
    basicView: true,
    minView: false,
    blogView: false,
  });
  /**
   * @func modifyViewData
   * @param name 需要修改的dynamicViewData名称
   * @param data 修改的值
   */
  function modifyViewData(
    name: keyof typeof dynamicViewData.value,
    data: boolean
  ) {
    dynamicViewData.value[name] = data;
  }

  return { dynamicViewData, modifyViewData };
});
