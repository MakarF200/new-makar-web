import { ref } from "vue";
import { defineStore } from "pinia";
import type { ProjectObj, ProjectImg, ProjectText } from "@/types/project";

/**
 * @ProjectShowImgData
 * 点击 project 展示的图片数据
 * @PS 一般为四张为准
 */
export const ProjectShowImgData = defineStore(
  "projectShowImgData",
  () => {
    const projectShowData = ref<ProjectImg[]>([]);
    const projectShowTextData = ref<ProjectText>({
      title: "",
      contentTextOne: "",
      contentTextTwo: "",
    });
    return { projectShowData, projectShowTextData };
  },
  {
    persist: true,
  }
);

/**
 * @StoreProjectData
 * project 内容数据
 */
export const StoreProjectData = defineStore(
  "projectData",
  () => {
    const projectMainData = ref<ProjectObj[]>([
      // Four-wheeled
      {
        id: "01",
        key: "Four-wheeled",
        name: "Four-wheeled survey trolley walking mechanism design",
        showImageUrl:
          "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735012094/Four-wheeled-survey-trolley_czgfeu.png",
        showLocImgUrl:
          "/png/project/four-wheeled/Four-wheeled-survey-trolley.png",
        titleImg: {
          imgUrl:
            "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735012094/Four-wheeled-survey-trolley_czgfeu.png",
          locImgUrl:
            "/png/project/four-wheeled/Four-wheeled-survey-trolley.png",
          id: "titleImg",
          key: "TransmissionStructure",
        },
        time: "2023-05-10",
        description:
          "This is my undergraduate graduation project, focusing on the design of the walking mechanism for a four-wheel survey vehicle. It includes the design of the mechanical structure, as well as the calculations for transmission, steering, and suspension systems.",
        tags: ["En", "Ch"],
        status: "completed",
        priority: 99,
        createdAt: new Date(2023, 1, 1, 10, 0, 0),
        finish: new Date(2023, 5, 1, 10, 0, 0),
        links: {
          github: "",
          webUrl: "",
          otherUrl: "",
        },
        participants: [{ name: "吴运宇", role: "负责人" }],
        rotation: [
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735012094/Four-wheeled-survey-trolley_czgfeu.png",
            locImgUrl:
              "/png/project/four-wheeled/Four-wheeled-survey-trolley.png",
            key: "Four-wheeled-survey-trolley",
            id: "1-0",
          },
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735018337/TransmissionStructure_txl73u.png",
            locImgUrl: "/png/project/four-wheeled/TransmissionStructure.png",
            id: "1-1",
            key: "TransmissionStructure",
          },
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735018336/Steering_dfvfyi.png",
            locImgUrl: "/png/project/four-wheeled/Steering.png",
            id: "1-2",
            key: "Steering",
          },
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735018336/SteeringStructure_yavjgg.png",
            locImgUrl: "/png/project/four-wheeled/SteeringStructure.png",
            id: "1-3",
            key: "SteeringStructure",
          },
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735018336/cutaway_ammu1p.png",
            locImgUrl: "/png/project/four-wheeled/cutaway.png",
            id: "1-4",
            key: "cutaway",
          },
        ],
      },
      // MES-system-in-company
      {
        id: "02",
        key: "MES-WMS-OA-system-in-company",
        name: "MES-WMS-OA system in company",
        titleImg: {
          imgUrl:
            "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024390/MES-KuTangGuo_purh3n.png",
          locImgUrl: "/png/project/mes-system/MES-KuTangGuo.png",
          id: "titleImg",
          key: "TransmissionStructure",
        },
        showImageUrl:
          "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024391/mes-system_t5vpka.png",
        showLocImgUrl: "/png/project/mes-system/mes-system.png",
        time: "2024-07-08",
        description:
          "This is a comprehensive internal management solution designed specifically for small and medium-sized enterprises in the discrete manufacturing industry in China. It aims to optimize production processes, improve resource allocation, and enhance production and operational efficiency through digitalization.",
        tags: ["En", "Ch"],
        status: "completed",
        priority: 99,
        createdAt: new Date(2023, 1, 1, 10, 0, 0),
        finish: new Date(2023, 5, 1, 10, 0, 0),
        links: {
          github: "https://github.com/Tunny-F404/01-project/tree/v1.0.0",
          webUrl: "http://www.029tec.com/",
          otherUrl: "",
        },
        participants: [{ name: "吴运宇", role: "前端负责人" }],
        rotation: [
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024391/mes-system-one_f4cier.png",
            locImgUrl: "/png/project/mes-system/mes-system.png",
            id: "2-0",
            key: "mes-system-one",
          },
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024391/mes-system-one_f4cier.png",
            locImgUrl: "/png/project/mes-system/mes-system-one.png",
            id: "2-1",
            key: "mes-system-one",
          },
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024392/mes-system-three_yw0f4p.png",
            locImgUrl: "/png/project/mes-system/mes-system-three.png",
            id: "2-2",
            key: "mes-system-three",
          },
          {
            imgUrl:
              "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024393/mes-system-two_koa5wf.png",
            locImgUrl: "/png/project/mes-system/mes-system-two.png",
            id: "2-3",
            key: "mes-system-two",
          },
        ],
      },
      // LLM-News
      {
        id: "03",
        key: "LLM-News",
        titleImg: {
          imgUrl: "https://freeimage.host/i/fCXp6CX",
          locImgUrl: "/png/project/llm-news/llm-news.png",
          id: "titleImg",
          key: "llm-news",
        },
        name: "LLM News",
        showImageUrl: "https://freeimage.host/i/fCXp6CX",
        showLocImgUrl: "/png/project/llm-news/llm-news.png",
        time: "2025-9-27",
        description:
          "An end-to-end AI-powered news aggregation system covering crawling, cleaning, summarization, search, and SSR rendering.",
        tags: ["En", "Ch"],
        status: "active",
        priority: 40,
        links: {
          github: "https://github.com/MakarF200/new-summary-project",
          webUrl: "https://www.antiquenews.xyz/",
          otherUrl: "",
        },
        participants: [{ name: "吴运宇", role: "全栈开发" }],
        rotation: [
          {
            imgUrl: "https://freeimage.host/i/fCXp6CX",
            locImgUrl: "/png/project/llm-news/llm-news.png",
            key: "llm-news-web-page-one",
            id: "3-0",
          },
        ],
      },
    ]);
    return { projectMainData };
  },
  {
    persist: true,
  }
);

/**
 * @getProjectShowImgData
 * @function 获取项目展示的图片数据
 * @param projectKeyOrId 项目key或id
 */
export const getProjectShowImgData = (projectKeyOrId: string): void => {
  try {
    const { projectMainData } = StoreProjectData();
    const { projectShowData, projectShowTextData } = ProjectShowImgData();

    // 核实项目是否存在
    const targetProject = projectMainData.find(
      (p: ProjectObj) => p.key === projectKeyOrId
    );

    if (targetProject) {
      // 覆盖为目标项目的轮播图
      projectShowData.splice(
        0,
        projectShowData.length,
        ...targetProject.rotation
      );
      // 覆盖为目标项目的文字数据
      projectShowTextData.title = targetProject.name;
      projectShowTextData.contentTextOne = targetProject.description;
    } else {
      projectShowData.length = 0;
      projectShowTextData.title = "";
      projectShowTextData.contentTextOne = "";
      console.log("没有找到项目");
    }
  } catch (error) {
    console.error("获取项目展示图片数据时发生错误:", error);
    // 发生错误时清空数据
    const { projectShowData, projectShowTextData } = ProjectShowImgData();
    projectShowData.length = 0;
    projectShowTextData.title = "";
    projectShowTextData.contentTextOne = "";
  }
};
