import { ref } from "vue";
import { defineStore } from "pinia";
// 导入icon
import HomeIcon from "@/assets/icons/home.svg";
import ProjectIcon from "@/assets/icons/project.svg";
import BlogIcon from "@/assets/icons/blog.svg";
import FreelanceIcon from "@/assets/icons/freelance.svg";
import AntIcon from "@/assets/icons/ant.svg";

export const PiniaAsideData = defineStore("asideData", () => {
  // 显示左边栏的状态
  const dynamicViewData = ref<{
    basicView: boolean;
    minView: boolean;
    blogView: boolean;
  }>({
    basicView: true,
    minView: false,
    blogView: false,
  });
  const sideData = ref<
    { name: string; href: string; action: string; icon: any }[]
  >([
    { name: "首页", href: "/", action: "home", icon: HomeIcon },
    { name: "项目", href: "/project", action: "project", icon: ProjectIcon },
    { name: "博客", href: "/blog", action: "blog", icon: BlogIcon },
    {
      name: "服务",
      href: "/freelance",
      action: "freelance",
      icon: FreelanceIcon,
    },
    { name: "蚂蚁哲学", href: "/ant", action: "ant", icon: AntIcon },
  ]);
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

  return { dynamicViewData, modifyViewData, sideData };
});
