import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const PiniaAsideData = defineStore("asideData", () => {
  const dynamicViewData = ref({
    basicView: true,
    minView: false,
    blogView: false,
  });
  function modifyViewData(name: keyof typeof dynamicViewData, data: boolean) {
    dynamicViewData.value[name] = data;
  }
  watch(dynamicViewData, (newData, oldData) => {
    let i = 0;
    for (const key in newData) {
      if (newData[key] == true) {
        i++;
      }
    }
    console.log("Pinia : ", dynamicViewData.value);
  });

  return { dynamicViewData, modifyViewData };
});
