/**
 * project 接口定义
 */

/**
 * @ProjectImg 项目图片TS格式
 */
export interface ProjectImg {
  /** 远程图片的 URL */
  imgUrl?: string;
  /** 本地图片的 URL */
  locImgUrl: string;
  /** 图片的唯一标识符 */
  key: string;
  /** 图片的id */
  id?: string;
}

/**
 * @ProjectLink 项目链接TS格式
 */
export interface ProjectLink {
  github?: string;
  webUrl?: string;
  otherUrl?: string;
}

/**
 * @ShowThisVueRotationImg 当前展示的vue组件的轮播图片TS格式
 */
export interface ShowThisVueRotationImg {
  leftShow: ProjectImg;
  // 左边图片/大图
  rightTopShow: ProjectImg;
  // 右边顶部图片
  rightBotShow: ProjectImg;
  // 右边下边图片
}

/**
 * 定义项目的数据结构TS格式
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
// 报价表格格式

export interface PriceTable {
  name: string;
  isHot: boolean;
  toObject?: string;
  introduction: string;
  price: string;
  featuresList: string[];
  border?: boolean;
  rightTab?: boolean;
}
