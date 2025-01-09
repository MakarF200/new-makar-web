import { ref } from "vue";
import { defineStore } from "pinia";
import type { ProjectObj } from "@/types/project";
/**
 * @StoreProjectData
 * project 内容数据
 */
export const StoreProjectData = defineStore("projectData", () => {
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
        locImgUrl: "/png/project/four-wheeled/Four-wheeled-survey-trolley.png",
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
      key: "MES-system-in-company",
      name: "MES system in company",
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
  ]);
  return { projectMainData };
});
