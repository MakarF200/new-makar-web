import { ref } from "vue";
import { defineStore } from "pinia";

export interface vueComponentStruct {
  viewComponent?: {
    leftComponent: {
      leftData: string;
      rightData: string;
    };
    rightComponent: {
      leftData: string;
      rightData: string;
    };
  };
  headButtonData: Array<{
    isVueComponent: string;
    contentData: {
      left: string;
      right: string;
    };
  }>;
}

export const PiniaMdToHtmlData = defineStore("mdToHtmlData", () => {
  const vueComponentData = ref<vueComponentStruct>({
    viewComponent: {
      leftComponent: {
        leftData: "import",
        rightData: "translation",
      },
      rightComponent: {
        leftData: "optionCSS",
        rightData: "preview",
      },
    },
    headButtonData: [
      {
        isVueComponent: "mdCode",
        contentData: {
          left: "import",
          right: "translation",
        },
      },
      {
        isVueComponent: "htmlCode",
        contentData: {
          left: "optionCSS",
          right: "preview",
        },
      },
      {
        isVueComponent: "htmlContent",
        contentData: {
          left: "optionCSS",
          right: "HTML code",
        },
      },
    ],
  });
  return { vueComponentData };
});
