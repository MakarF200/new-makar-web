import { ref } from "vue";
import { defineStore } from "pinia";
import { marked } from "marked";

export const PiniaBlogData = defineStore("blogData", () => {
  const mdData = ref<{
    title: string;
    imgURL: string;
    content: string;
  }>({
    title: "",
    imgURL: "",
    content: "",
  });
  const mdModulesObj = ref();
  const mdObjData = ref();
  const mdMenu = ref([
    {
      title: "Blog",
      grade: 1,
      id: "",
      img: "",
      content: [
        {
          title: "Css",
          grade: 2,
          id: "css",
          img: "",
          svg: "",
          other: "",
          content: [
            {
              title: "css元素居中",
              grade: 3,
              id: "div-center",
              img: "",
              other: "",
              content: {},
            },
          ],
        },
        {
          title: "DCloud",
          grade: 2,
          id: "dcloud",
          img: "",
          svg: "",
          other: "",
          content: [
            {
              title: "uni-im",
              grade: 3,
              id: "uni-im-public-modules",
              img: "",
              other: "",
              content: {},
            },
          ],
        },
        {
          title: "Git",
          grade: 2,
          id: "git",
          img: "",
          svg: "",
          other: "",
          content: [
            {
              title: "git基本操作",
              grade: 3,
              id: "git-base",
              img: "",
              other: "",
              content: {},
            },
          ],
        },
        {
          title: "Github",
          grade: 2,
          id: "github",
          img: "",
          svg: "",
          other: "",
          content: [
            {
              title: "github pages",
              grade: 3,
              id: "github-pages",
              img: "",
              other: "",
              content: {},
            },
          ],
        },
        {
          title: "JavaScript",
          grade: 2,
          id: "md-js",
          img: "",
          svg: "",
          other: "",
          content: [
            {
              title: "执行上下文栈",
              grade: 3,
              id: "execution-context-stack",
              img: "",
              other: "",
              content: {},
            },
            {
              title: "执行上下文",
              grade: 3,
              id: "execution-context",
              img: "",
              other: "",
              content: {},
            },
            {
              title: "原型链",
              grade: 3,
              id: "prototype-link",
              img: "",
              other: "",
              content: {},
            },
          ],
        },
        {
          title: "Other",
          grade: 2,
          id: "other",
          img: "",
          svg: "",
          other: "",
          content: [
            {
              title: "录屏软件",
              grade: 3,
              id: "screen-ecording",
              img: "",
              other: "",
              content: {},
            },
          ],
        },
      ],
    },
  ]);
  /**
   * 对blog view呈现的内容进行更改
   * @func changeMdData
   * @toId 传入进行匹配的id
   */
  function changeMdData(toId: string) {
    for (const key in mdObjData.value) {
      if (toId == key) {
        mdData.value.content = mdObjData.value[toId];
      } else {
        console.log(`判断失败 : key : ${key} : toId : ${toId}`);
      }
    }
    console.log("Pinia : blog : function : changeMdData is runing");
  }
  /**
   * 用在组件加载时生成md文件的模块对象,并将其放入mdModulesObj
   * @func importMdFileToModules
   */
  async function importMdFileToModules() {
    mdModulesObj.value = await importMdFile();
    console.log("Pinia : blog : function : importMdFileToModules is runing");
  }
  /**
   * 导入所有 Markdown 文件
   * @func importMdFile
   * @returns {object} 匹配的文件路径的模块对象
   */
  function importMdFile() {
    const modules = import.meta.glob("./../../public/markdown/**/*.md", {
      as: "raw",
    });
    console.log("Pinia : blog : modules : ", modules);
    return modules;
  }
  // TODO: 这里的逻辑是点击aside的blog列表中的一栏，然后传入data到pinia的func，改变bolg-content的数据
  // TODO: 这里需要规划好mdMenu字符串的结构，现有的obj{url:html}太消耗性能了
  /**
   * 提取模块对象为字符串
   * 其中的模块对象的key由原来的url被裁剪成最后的md文件名
   * @func mdFileToMd
   * @modules 传入的模块对象
   * @returns {object} 匹配的文件路径的对象
   */
  type modules = Record<string, () => Promise<string>>;
  type strstrObj = Record<string, string>;
  async function mdFileToMd(modules: modules) {
    const outputObj: Record<string, string> = {};
    for (const key in modules) {
      if (modules.hasOwnProperty(key)) {
        // 解构模块对象
        const analysKeyData = await modules[key]();
        const content = analysKeyData;
        // 裁剪key
        const newKey = cutData(key);
        outputObj[newKey] = content;
      } else {
        console.log("Pinia : Func : not find modules's key :", key);
      }
    }
    return outputObj;
  }
  /**
   * 用marked转换成html
   * @func mdToHtml
   * @returns {HTML} 转换成的html
   */
  async function mdToHtml(mdData: string) {
    const htmlContent = await marked(mdData);
    return htmlContent;
  }
  /**
   * 剥离key的数据
   * @func cutData
   * @return {string}
   */
  function cutData(oldData: string) {
    return oldData.split("/")[5].split(".")[0];
  }
  /**
   * 获取md文件的内容并将及其转换成obj{url:html}
   * @func getUrlHtmlObj
   */
  async function getUrlHtmlObj() {
    const modules = importMdFile();
    const outputObj = await mdFileToMd(modules);
    console.log("Pinia : blog : outputObj : ", outputObj);
    const outputHtml: strstrObj = {};
    for (const key in outputObj) {
      if (outputObj.hasOwnProperty(key)) {
        const contentHtml = await mdToHtml(outputObj[key]);
        outputHtml[key] = contentHtml;
      }
    }
    console.log("Pinia : blog : outputHtml : ", outputHtml);
    mdObjData.value = outputHtml;
  }
  return {
    mdData,
    mdObjData,
    mdMenu,
    mdModulesObj,
    importMdFile,
    importMdFileToModules,
    changeMdData,
    mdFileToMd,
    mdToHtml,
    getUrlHtmlObj,
  };
});
