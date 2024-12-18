import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { marked } from "marked"

export const PiniaBlogData = defineStore('blogData', () => {
  const mdData = ref({
   "title": "",
   "imgURL": "",
   "contentURL": "",
  });
  const mdObjData = ref();
  const mdMenu = ref();
   /**
    * 导入所有 Markdown 文件
    * @func importMdFile
    * @returns {object} 匹配的文件路径的模块对象
    */
  function importMdFile() {
   const modules = import.meta.glob("./../../public/markdown/**/*.md", { as: 'raw' })
   console.log("asidePinia : modules : ",modules);
   return modules;
  }
  TODO: 这里的逻辑是点击aside的blog列表中的一栏，然后传入data到pinia的func，改变bolg-content的数据
  TODO: 这里需要规划好mdMenu字符串的结构，现有的obj{url:html}太消耗性能了
  /**
    * 提取模块对象为字符串
    * @func mdFileToMd
    * @modules 传入的模块对象
    * @returns {object} 匹配的文件路径的对象
    */
  async function mdFileToMd(modules) {
   const outputObj = {};
   for (const key in modules) {
      if (modules.hasOwnProperty(key)) {
         const analysKeyData = await modules[key]();
         const content = analysKeyData;
         console.log("asidePinia : content : ", content);
         outputObj[key] = content;
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
  async function mdToHtml(mdData) {
   const htmlContent = await marked(mdData);
   return htmlContent;
  }
  /** 
  * 获取md文件的菜单（三级）
  * @func getMdMenu 
  */
  async function getMdMenu() {
    const objData = importMdFile();
    const objOutput = {};
    for (const key in objData) {
      if (objData.hasOwnProperty(key)) {

      }
    }
  }
  /**
 * 获取md文件的内容并将及其转换成obj{url:html}
 * @func getUrlHtmlObj
 */
  async function getUrlHtmlObj() {
   const modules = importMdFile();
   const outputObj = await mdFileToMd(modules);
   console.log("asidePinia : outputObj : ",outputObj);
   const outputHtml = {};
   for (const key in outputObj) {
    if (outputObj.hasOwnProperty(key)) {
      const contentHtml = await mdToHtml(outputObj[key])
      outputHtml[key] = contentHtml;
    }
   }
   console.log("asidePinia : outputHtml : ",outputHtml);
   mdObjData.value = outputHtml;
  }
  return { mdData,mdObjData, importMdFile, mdFileToMd, mdToHtml, getUrlHtmlObj }
})