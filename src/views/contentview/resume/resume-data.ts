export interface ResumeSubsection {
  title: string;
  subtitle?: string;
  link?: { text: string; url: string };
  impact?: string;
  techStack?: string;
  overview?: string;
  responsibilities?: { title: string; items: string[] };
  results?: { title: string; items: string[] };
  content?: string[]; // For work/internship lists
}

export interface ResumeData {
  labels: {
    impact: string;
    techStack: string;
    overview: string;
    responsibilities: string;
    results: string;
  };
  header: {
    name: string;
    title: string;
    info: {
      details: string;
      phone: string;
      email: string;
      website: string;
    };
  };
  summary: {
    title: string;
    content: string;
  };
  intention: {
    title: string;
    items: string[];
  };
  education: {
    title: string;
    school: string;
    time: string;
    degree: string;
    details: string[];
  };
  projects: {
    title: string;
    items: ResumeSubsection[];
  };
  work: {
    title: string;
    items: ResumeSubsection[];
  };
  internship: {
    title: string;
    items: ResumeSubsection[];
  };
  skills: {
    title: string;
    items: { title: string; content: string }[];
  };
  footer: string;
  download: {
    text: string;
    filename: string;
    url: string;
  };
}

export const resumeData: Record<string, ResumeData> = {
  en: {
    labels: {
      impact: "Impact:",
      techStack: "Tech Stack:",
      overview: "Overview",
      responsibilities: "Responsibilities & Achievements",
      results: "Results",
    },
    header: {
      name: "Wu Yunyu",
      title:
        "Full-Stack Engineer | React / Next.js / FastAPI / Automation Systems",
      info: {
        details: "Male · 24 yrs · 2 yrs Exp.",
        phone: "+86 18715630190",
        email: "fullstack.makar@gmail.com",
        website: "www.makar.xin",
      },
    },
    summary: {
      title: "Summary",
      content:
        "Full-stack engineer with strong experience in <strong>React/Next.js</strong>, <strong>FastAPI</strong>, and <strong>automation systems</strong>. Skilled in building scalable applications, integrating <strong>LLMs (Qwen / LLaMA)</strong>, and designing multi-device automation architectures. Capable of owning end-to-end development and working with distributed remote teams.",
    },
    intention: {
      title: "Intention",
      items: [
        "Front-end / Full-stack Engineer (Remote)",
        "Global Opportunities",
      ],
    },
    education: {
      title: "Education",
      school: "Bengbu University",
      time: "2019.09 – 2023.06",
      degree: "B.Eng. Mechanical Design, Manufacturing & Automation",
      details: [
        "GPA Top 20%",
        "National & provincial award recipient",
        "Holder of a utility model patent",
      ],
    },
    projects: {
      title: "Project Experience",
      items: [
        {
          title: "Cross-Platform Social Media Automation System",
          subtitle: "Full-Stack",
          impact:
            "Reduced manual workload by <strong>90%</strong>, supported <strong>50+ concurrent devices</strong>.",
          techStack:
            "Python, Auto.js (JavaScript), Playwright, Qwen API, OCR/OpenCV, SSH automation, AdsPower",
          overview:
            "Designed and built a fully automated cross-platform content distribution and device-orchestration system.",
          responsibilities: {
            title: "Responsibilities & Achievements",
            items: [
              "Designed real-device automation using Auto.js + Termux to simulate real mobile behaviour.",
              "Created a behavior simulation engine to reduce risk control detection.",
              "Integrated <strong>Qwen LLM</strong> with template system for auto-generated localized content.",
              "Built OCR-based anomaly detection: screenshots → CAPTCHA/risk warning detection → automated recovery.",
              "Implemented Python-based scheduler: concurrency, retries, device health monitoring.",
              "Integrated AdsPower API for multi-account isolation & profile environment control.",
            ],
          },
          results: {
            title: "Results",
            items: [
              "Stable concurrency across <strong>50+ devices</strong>",
              "&gt; 95% task success rate",
              "90%+ reduction in manual workload",
              "10× improvement in content throughput",
              "Significantly higher account survival rate",
            ],
          },
        },
        {
          title: "NEWS Global Aggregator Platform",
          subtitle: "Full-Stack",
          link: {
            text: "https://www.antiquenews.xyz",
            url: "https://www.antiquenews.xyz",
          },
          impact:
            "AI-powered news system with automated pipelines & SEO-ready SSR rendering.",
          techStack:
            "Next.js 14, React, TypeScript, Zustand, TailwindCSS, FastAPI, PostgreSQL, LLaMA, Docker",
          overview:
            "A fully automated global news pipeline: <strong>crawl → clean → store → summarize → search → SSR render</strong>",
          responsibilities: {
            title: "Responsibilities & Achievements",
            items: [
              "Designed complete Next.js + FastAPI architecture.",
              "Built async crawler framework with dedupe, cleaning & task scheduling.",
              "Designed PostgreSQL schemas + async ORM for high-performance pagination & search.",
              "Integrated <strong>LLaMA</strong> for summarization, keyword extraction, and title generation.",
              "Implemented infinite scroll, filters, full-text search & timeline view.",
              "Built production deployment (Docker + Nginx + systemd).",
              "Implemented hybrid SSR/CSR for SEO.",
            ],
          },
          results: {
            title: "Results",
            items: [
              "40% faster first render",
              "Fully automated multi-source news generation",
              "Successfully indexed by Google",
              "Strong SEO performance",
            ],
          },
        },
        {
          title:
            "Enterprise Management Systems (MES / WMS / OA / Smart Community)",
          subtitle: "Front-end",
          impact:
            "Delivered stable enterprise modules with high reusability & strong permission control.",
          techStack:
            "Vue.js, Vue-Router, ElementUI, Axios, Webpack, Apifox, MockJS",
          overview:
            "Built multiple enterprise-level ERP/OA systems with complex workflows & hierarchical permissions.",
          responsibilities: {
            title: "Responsibilities & Achievements",
            items: [
              "Led frontend architecture planning, API standardization & error-handling design.",
              "Implemented Axios interceptors, global token injection, permission checks & auto-recovery.",
              "Built dynamic routing with role-based guards.",
              "Developed reusable component library (table/form/chart/dialog).",
              "Optimized Webpack: code-splitting, lazy-loading, tree-shaking.",
              "Built mock APIs via Apifox + MockJS for parallel development.",
            ],
          },
          results: {
            title: "Results",
            items: [
              "+30% reusable component rate",
              "-70% permission-related issues",
              "+20–25% development efficiency",
            ],
          },
        },
      ],
    },
    work: {
      title: "Work Experience",
      items: [
        {
          title: "Independent Developer — Full-Stack Engineer",
          subtitle: "2023.06 – Present",
          content: [
            "Providing full-stack development services for enterprise clients.",
            "Frontend architecture, backend API development, database design.",
            "Built multiple full-stack applications (news platform, automation system).",
            "Implemented LLM integrations, local model deployment, and automation pipelines.",
          ],
        },
      ],
    },
    internship: {
      title: "Internship",
      items: [
        {
          title: "iFlytek Co., Ltd — Embedded Development Intern",
          subtitle: "2021.07 – 2021.09",
          content: [
            "Integrated iFlytek speech-interaction SDK.",
            "Participated in modular system design and cross-team collaboration.",
            "Wrote test cases & performed performance/stability testing for speech modules.",
          ],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      items: [
        {
          title: "Front-end",
          content:
            "React · Next.js · Vue.js · TypeScript · Zustand · TailwindCSS",
        },
        {
          title: "Backend / Full-Stack",
          content: "FastAPI · PostgreSQL · Docker · Nginx · AsyncIO",
        },
        {
          title: "LLM & AI",
          content:
            "Qwen / LLaMA Integration · Local Model Deployment · Prompt Engineering",
        },
        {
          title: "Automation",
          content:
            "Auto.js · Playwright · OCR / OpenCV · Behavior Simulation · Multi-device Control",
        },
        {
          title: "DevOps",
          content: "Linux · Docker · Uvicorn · systemd · CI/CD Automation",
        },
      ],
    },
    footer: "Wu Yunyu. All rights reserved.",
    download: {
      text: "download",
      filename: "WuYunyu_frontend_remote_en.pdf",
      url: "/pdf/WuYunyu_frontend_remote_25.11_en.pdf",
    },
  },
  zh: {
    labels: {
      impact: "影响力:",
      techStack: "技术栈:",
      overview: "项目概述",
      responsibilities: "职责与成就",
      results: "成果",
    },
    header: {
      name: "吴云宇",
      title: "全栈工程师 | React / Next.js / FastAPI / 自动化系统",
      info: {
        details: "男 · 24岁 · 2年经验",
        phone: "+86 18715630190",
        email: "fullstack.makar@gmail.com",
        website: "www.makar.xin",
      },
    },
    summary: {
      title: "个人总结",
      content:
        "拥有丰富的 <strong>React/Next.js</strong>、<strong>FastAPI</strong> 和 <strong>自动化系统</strong> 开发经验的全栈工程师。擅长构建可扩展的全栈应用，集成 <strong>LLM (Qwen / LLaMA)</strong>，以及设计多设备自动化架构。具备独立完成端到端开发的能力，并有与分布式远程团队协作的经验。",
    },
    intention: {
      title: "求职意向",
      items: ["前端 / 全栈工程师 (远程)", "全球机会"],
    },
    education: {
      title: "教育背景",
      school: "蚌埠学院",
      time: "2019.09 – 2023.06",
      degree: "机械设计制造及其自动化 (本科)",
      details: ["GPA 前 20%", "国家级及省级奖项获得者", "实用新型专利持有人"],
    },
    projects: {
      title: "项目经验",
      items: [
        {
          title: "跨平台社交媒体自动化系统",
          subtitle: "全栈",
          impact:
            "减少了 <strong>90%</strong> 的人工工作量，支持 <strong>50+ 台设备并发运行</strong>。",
          techStack:
            "Python, Auto.js (JavaScript), Playwright, Qwen API, OCR/OpenCV, SSH automation, AdsPower",
          overview:
            "设计并构建了一个完全自动化的跨平台内容分发和设备编排系统。",
          responsibilities: {
            title: "职责与成就",
            items: [
              "设计了基于 Auto.js + Termux 的真机自动化架构，模拟真实移动端行为（手势偏移、延迟、随机浏览路径）。",
              "开发了行为模拟引擎以降低风控检测风险。",
              "集成 <strong>Qwen LLM</strong> 与模板系统，实现本地化内容的自动生成。",
              "构建了基于 OCR 的异常检测模块：截图 → CAPTCHA/风险警告检测 → 自动恢复。",
              "实现了基于 Python 的调度平台：支持并发、重试、设备健康监控。",
              "集成 AdsPower API 实现多账号隔离及环境控制。",
            ],
          },
          results: {
            title: "成果",
            items: [
              "实现 <strong>50+ 台设备</strong> 的稳定并发",
              "任务成功率 > 95%",
              "减少 90%+ 的人工工作量",
              "内容产出效率提升 10 倍",
              "显著提高账号存活率",
            ],
          },
        },
        {
          title: "NEWS 全球新闻聚合平台",
          subtitle: "全栈",
          link: {
            text: "https://www.antiquenews.xyz",
            url: "https://www.antiquenews.xyz",
          },
          impact:
            "构建了具备自动化数据管道和 SEO 友好的 SSR 渲染的 AI 驱动新闻系统。",
          techStack:
            "Next.js 14, React, TypeScript, Zustand, TailwindCSS, FastAPI, PostgreSQL, LLaMA, Docker",
          overview:
            "一个涵盖全流程的全球新闻聚合系统：<strong>采集 → 清洗 → 存储 → 摘要 → 搜索 → SSR 渲染</strong>",
          responsibilities: {
            title: "职责与成就",
            items: [
              "设计了完整的 Next.js + FastAPI 架构。",
              "构建了异步爬虫框架，支持多源数据采集、清洗、去重及任务调度。",
              "设计了 PostgreSQL 模式及异步 ORM 查询，实现高性能分页与搜索。",
              "集成 <strong>LLaMA</strong> 本地模型进行新闻摘要、关键词提取和标题生成。",
              "实现了无限滚动、筛选、全文搜索及时间轴视图。",
              "构建了生产级部署流程 (Docker + Nginx + systemd)。",
              "实现了混合 SSR/CSR 渲染以优化 SEO。",
            ],
          },
          results: {
            title: "成果",
            items: [
              "首屏渲染速度提升 40%",
              "全自动多源新闻生成",
              "成功被 Google 收录，SEO 表现优异",
            ],
          },
        },
        {
          title: "企业管理系统 (MES / WMS / OA / 智慧社区)",
          subtitle: "前端",
          impact: "交付了高复用性且权限控制严格的稳定企业级模块。",
          techStack:
            "Vue.js, Vue-Router, ElementUI, Axios, Webpack, Apifox, MockJS",
          overview: "构建了多个具有复杂工作流和层级权限的企业级 ERP/OA 系统。",
          responsibilities: {
            title: "职责与成就",
            items: [
              "主导前端架构规划、API 标准化及错误处理设计。",
              "实现了 Axios 拦截器、全局 Token 注入、统一权限校验及自动恢复。",
              "构建了基于角色的动态路由守卫。",
              "开发了可复用的组件库 (表格/表单/图表/弹窗)。",
              "优化 Webpack：代码分割、懒加载、Tree-shaking。",
              "通过 Apifox + MockJS 构建 Mock API 以支持并行开发。",
            ],
          },
          results: {
            title: "成果",
            items: [
              "组件复用率提升 30%+",
              "权限相关问题减少 70%",
              "开发效率提升 20–25%",
            ],
          },
        },
      ],
    },
    work: {
      title: "工作经历",
      items: [
        {
          title: "独立开发者 — 全栈工程师",
          subtitle: "2023.06 – 至今",
          content: [
            "为企业客户提供全栈开发服务。",
            "负责前端架构、后端 API 开发及数据库设计。",
            "构建了多个全栈应用 (新闻平台、自动化系统)。",
            "实现了 LLM 集成、本地模型部署及自动化管道。",
          ],
        },
      ],
    },
    internship: {
      title: "实习经历",
      items: [
        {
          title: "科大讯飞 — 嵌入式开发实习生",
          subtitle: "2021.07 – 2021.09",
          content: [
            "集成科大讯飞语音交互 SDK。",
            "参与模块化系统设计及跨团队协作。",
            "编写测试用例并执行语音模块的性能/稳定性测试。",
          ],
        },
      ],
    },
    skills: {
      title: "技术技能",
      items: [
        {
          title: "前端",
          content:
            "React · Next.js · Vue.js · TypeScript · Zustand · TailwindCSS",
        },
        {
          title: "后端 / 全栈",
          content: "FastAPI · PostgreSQL · Docker · Nginx · AsyncIO",
        },
        {
          title: "LLM & AI",
          content:
            "Qwen / LLaMA 集成 · 本地模型部署 · 提示词工程 (Prompt Engineering)",
        },
        {
          title: "自动化",
          content:
            "Auto.js · Playwright · OCR / OpenCV · 行为模拟 · 多设备控制",
        },
        {
          title: "DevOps",
          content: "Linux · Docker · Uvicorn · systemd · CI/CD 自动化",
        },
      ],
    },
    footer: "吴运宇. 保留所有权利.",
    download: {
      text: "下载简历",
      filename: "WuYunyu_frontend_remote_en.pdf",
      url: "/pdf/WuYunyu_frontend_remote_25.11_en.pdf", // Note: Need to update this if there is a Chinese PDF. Assuming use English PDF or same link for now as user didn't provide Chinese PDF link explicitly in "new" info, but let's stick to what we have. Actually the prompt implies 3 different resumes. I'll use placeholders for Chinese PDFs or same one if not available.
    },
  },
  tw: {
    labels: {
      impact: "影響力:",
      techStack: "技術棧:",
      overview: "專案概述",
      responsibilities: "職責與成就",
      results: "成果",
    },
    header: {
      name: "吳雲宇",
      title: "全端工程師 | React / Next.js / FastAPI / 自動化系統",
      info: {
        details: "男 · 24歲 · 2年經驗",
        phone: "+86 18715630190",
        email: "fullstack.makar@gmail.com",
        website: "www.makar.xin",
      },
    },
    summary: {
      title: "個人總結",
      content:
        "擁有豐富的 <strong>React/Next.js</strong>、<strong>FastAPI</strong> 和 <strong>自動化系統</strong> 開發經驗的全端工程師。擅長建構可擴展的全端應用，整合 <strong>LLM (Qwen / LLaMA)</strong>，以及設計多設備自動化架構。具備獨立完成端到端開發的能力，並有與分散式遠端團隊協作的經驗。",
    },
    intention: {
      title: "求職意向",
      items: ["前端 / 全端工程師 (遠端)", "全球機會"],
    },
    education: {
      title: "教育背景",
      school: "蚌埠學院",
      time: "2019.09 – 2023.06",
      degree: "機械設計製造及其自動化 (學士)",
      details: ["GPA 前 20%", "國家級及省級獎項獲得者", "實用新型專利持有人"],
    },
    projects: {
      title: "專案經驗",
      items: [
        {
          title: "跨平台社群媒體自動化系統",
          subtitle: "全端",
          impact:
            "減少了 <strong>90%</strong> 的人工工作量，支援 <strong>50+ 台設備並發運行</strong>。",
          techStack:
            "Python, Auto.js (JavaScript), Playwright, Qwen API, OCR/OpenCV, SSH automation, AdsPower",
          overview:
            "設計並建構了一個完全自動化的跨平台內容分發和設備編排系統。",
          responsibilities: {
            title: "職責與成就",
            items: [
              "設計了基於 Auto.js + Termux 的真機自動化架構，模擬真實移動端行為（手勢偏移、延遲、隨機瀏覽路徑）。",
              "開發了行為模擬引擎以降低風控檢測風險。",
              "整合 <strong>Qwen LLM</strong> 與模板系統，實現在地化內容的自動生成。",
              "建構了基於 OCR 的異常檢測模組：截圖 → CAPTCHA/風險警告檢測 → 自動恢復。",
              "實現了基於 Python 的調度平台：支援並發、重試、設備健康監控。",
              "整合 AdsPower API 實現多帳號隔離及環境控制。",
            ],
          },
          results: {
            title: "成果",
            items: [
              "實現 <strong>50+ 台設備</strong> 的穩定並發",
              "任務成功率 > 95%",
              "減少 90%+ 的人工工作量",
              "內容產出效率提升 10 倍",
              "顯著提高帳號存活率",
            ],
          },
        },
        {
          title: "NEWS 全球新聞聚合平台",
          subtitle: "全端",
          link: {
            text: "https://www.antiquenews.xyz",
            url: "https://www.antiquenews.xyz",
          },
          impact:
            "建構了具備自動化數據管道和 SEO 友好的 SSR 渲染的 AI 驅動新聞系統。",
          techStack:
            "Next.js 14, React, TypeScript, Zustand, TailwindCSS, FastAPI, PostgreSQL, LLaMA, Docker",
          overview:
            "一個涵蓋全流程的全球新聞聚合系統：<strong>採集 → 清洗 → 儲存 → 摘要 → 搜尋 → SSR 渲染</strong>",
          responsibilities: {
            title: "職責與成就",
            items: [
              "設計了完整的 Next.js + FastAPI 架構。",
              "建構了非同步爬蟲框架，支援多源數據採集、清洗、去重及任務調度。",
              "設計了 PostgreSQL 模式及非同步 ORM 查詢，實現高性能分頁與搜尋。",
              "整合 <strong>LLaMA</strong> 本地模型進行新聞摘要、關鍵字提取和標題生成。",
              "實現了無限捲動、篩選、全文搜尋及時間軸視圖。",
              "建構了生產級部署流程 (Docker + Nginx + systemd)。",
              "實現了混合 SSR/CSR 渲染以優化 SEO。",
            ],
          },
          results: {
            title: "成果",
            items: [
              "首屏渲染速度提升 40%",
              "全自動多源新聞生成",
              "成功被 Google 收錄，SEO 表現優異",
            ],
          },
        },
        {
          title: "企業管理系統 (MES / WMS / OA / 智慧社區)",
          subtitle: "前端",
          impact: "交付了高復用性且權限控制嚴格的穩定企業級模組。",
          techStack:
            "Vue.js, Vue-Router, ElementUI, Axios, Webpack, Apifox, MockJS",
          overview: "建構了多個具有複雜工作流和層級權限的企業級 ERP/OA 系統。",
          responsibilities: {
            title: "職責與成就",
            items: [
              "主導前端架構規劃、API 標準化及錯誤處理設計。",
              "實現了 Axios 攔截器、全局 Token 注入、統一權限校驗及自動恢復。",
              "建構了基於角色的動態路由守衛。",
              "開發了可復用的元件庫 (表格/表單/圖表/彈窗)。",
              "優化 Webpack：程式碼分割、懶加載、Tree-shaking。",
              "通過 Apifox + MockJS 建構 Mock API 以支援並行開發。",
            ],
          },
          results: {
            title: "成果",
            items: [
              "元件復用率提升 30%+",
              "權限相關問題減少 70%",
              "開發效率提升 20–25%",
            ],
          },
        },
      ],
    },
    work: {
      title: "工作經歷",
      items: [
        {
          title: "獨立開發者 — 全端工程師",
          subtitle: "2023.06 – 至今",
          content: [
            "為企業客戶提供全端開發服務。",
            "負責前端架構、後端 API 開發及資料庫設計。",
            "建構了多個全端應用 (新聞平台、自動化系統)。",
            "實現了 LLM 整合、本地模型部署及自動化管道。",
          ],
        },
      ],
    },
    internship: {
      title: "實習經歷",
      items: [
        {
          title: "科大訊飛 — 嵌入式開發實習生",
          subtitle: "2021.07 – 2021.09",
          content: [
            "整合科大訊飛語音交互 SDK。",
            "參與模組化系統設計及跨團隊協作。",
            "編寫測試用例並執行語音模組的性能/穩定性測試。",
          ],
        },
      ],
    },
    skills: {
      title: "技術技能",
      items: [
        {
          title: "前端",
          content:
            "React · Next.js · Vue.js · TypeScript · Zustand · TailwindCSS",
        },
        {
          title: "後端 / 全端",
          content: "FastAPI · PostgreSQL · Docker · Nginx · AsyncIO",
        },
        {
          title: "LLM & AI",
          content:
            "Qwen / LLaMA 整合 · 本地模型部署 · 提示詞工程 (Prompt Engineering)",
        },
        {
          title: "自動化",
          content:
            "Auto.js · Playwright · OCR / OpenCV · 行為模擬 · 多設備控制",
        },
        {
          title: "DevOps",
          content: "Linux · Docker · Uvicorn · systemd · CI/CD 自動化",
        },
      ],
    },
    footer: "吳運宇. 保留所有權利.",
    download: {
      text: "下載簡歷",
      filename: "WuYunyu_frontend_remote_zh_tw.pdf",
      url: "/pdf/WuYun_FE_remote_zh_tw_25.11.pdf",
    },
  },
};
