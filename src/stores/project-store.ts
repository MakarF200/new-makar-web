import { ref } from "vue";
import { defineStore } from "pinia";

/**
 * 项目接口定义
 */
export interface ProjectImg {
  /** 远程图片的 URL */
  imgUrl: string;
  /** 本地图片的 URL */
  locImgUrl: string;
  /** 图片的唯一标识符 */
  key: string;
  /** 图片的id */
  id: string;
}
export interface ProjectLink {
  github?: string;
  webUrl?: string;
  otherUrl?: string;
}

/**
 * 定义项目的数据结构
 */
export interface ProjectObj {
  /** 项目的唯一标识 */
  id: string;

  /** 项目键值，用于快速定位项目 */
  key: string;
  /** 项目栏所用图片 */
  titleImg?: ProjectImg;
  /** 项目名称 */
  name: string;

  /** 项目的远程图片地址 */
  showImageUrl: string;

  /** 项目的本地图片地址 */
  showLocImgUrl: string;

  /** 项目的时间戳，格式为 YYYY-MM-DD */
  time: string;

  /**
   * 项目的描述信息
   * @optional
   */
  description: string;

  /**
   * 项目相关标签，用于分类或过滤
   * @example ["En", "Ch"]
   */
  tags: string[];

  /**
   * 项目状态
   * - "active": 项目正在进行中
   * - "completed": 项目已完成
   * - "deploy": 项目已部署
   * @default "active"
   */
  status?: "active" | "completed" | "archived";

  /** 项目的优先级，数值越小优先级越高
   *  数值为99表示项目已完成or已部署
   */
  priority?: number;

  /** 项目的创建时间 */
  createdAt?: Date;

  /** 项目的更新时间 */
  updatedAt?: Date;

  /** 项目的完成时间 */
  finish?: Date;

  /**
   * 相关链接列表，用于存储与项目相关的外部资源
   * @example ["https://example.com", "https://docs.com"]
   */
  links: ProjectLink;

  /**
   * 项目参与者列表，记录人员及其角色
   * @example [{ name: "Alice", role: "Manager" }]
   */
  participants?: { name: string; role: string }[];

  /**
   * 项目的轮播图列表
   * @example [
   *   { imgUrl: "https://example.com/img1.png", locImgUrl: "/local/img1.png", key: "1" }
   * ]
   */
  rotation: ProjectImg[];
}
export const StoreProjectData = defineStore("projectData", () => {
  const count = ref(0);
  const data = ref([
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ]);
  const mainData = ref<ProjectObj[]>([
    {
      id: "1",
      key: "Four-wheeled",
      name: "Four-wheeled",
      showImageUrl:
        "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735012094/Four-wheeled-survey-trolley_czgfeu.png",
      showLocImgUrl:
        "/public/png/project/four-wheeled/Four-wheeled-survey-trolley.png",
      titleImg: {
        imgUrl:
          "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735012094/Four-wheeled-survey-trolley_czgfeu.png",
        locImgUrl:
          "/public/png/project/four-wheeled/Four-wheeled-survey-trolley.png",
        id: "11",
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
          locImgUrl:
            "/public/png/project/four-wheeled/TransmissionStructure.png",
          id: "11",
          key: "TransmissionStructure",
        },
        {
          imgUrl:
            "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735018336/Steering_dfvfyi.png",
          locImgUrl: "/public/png/project/four-wheeled/Steering.png",
          id: "12",
          key: "Steering",
        },
        {
          imgUrl:
            "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735018336/SteeringStructure_yavjgg.png",
          locImgUrl: "/public/png/project/four-wheeled/SteeringStructure.png",
          id: "13",
          key: "SteeringStructure",
        },
        {
          imgUrl:
            "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735018336/cutaway_ammu1p.png",
          locImgUrl: "/public/png/project/four-wheeled/cutaway.png",
          id: "14",
          key: "cutaway",
        },
      ],
    },
    {
      id: "02",
      key: "MES system in company",
      name: "MES system in company",
      titleImg: {
        imgUrl:
          "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024390/MES-KuTangGuo_purh3n.png",
        locImgUrl: "/public/png/project/mes-system/MES-KuTangGuo.png",
        id: "11",
        key: "TransmissionStructure",
      },
      showImageUrl:
        "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024391/mes-system_t5vpka.png",
      showLocImgUrl: "/public/png/project/mes-system/mes-system.png",
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
          locImgUrl: "/public/png/project/mes-system/mes-system-one.png",
          id: "21",
          key: "mes-system-one",
        },
        {
          imgUrl:
            "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024392/mes-system-three_yw0f4p.png",
          locImgUrl: "/public/png/project/mes-system/mes-system-three.png",
          id: "22",
          key: "mes-system-three",
        },
        {
          imgUrl:
            "https://res.cloudinary.com/dzhf0gkvi/image/upload/v1735024393/mes-system-two_koa5wf.png",
          locImgUrl: "/public/png/project/mes-system/mes-system-two.png",
          id: "23",
          key: "mes-system-two",
        },
      ],
    },
  ]);

  return { mainData, count, data };
});
