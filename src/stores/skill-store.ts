import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const StoreSkillData = defineStore("skillData", () => {
  const count = ref(0);
  const data = [
    {
      title: "General",
      content: [
        {
          svg: "",
          name: "Web Development",
        },
        {
          svg: "",
          name: "System Design",
        },
        {
          svg: "",
          name: "AI Application Development",
        },
        {
          svg: "",
          name: "Prototyping & UX Wireframing",
        },
        {
          svg: "",
          name: "Testing & Debugging",
        },
        {
          svg: "",
          name: "Diagramming (Flowcharts / Architecture)",
        },
      ],
    },
    {
      title: "Automation / System Engineering",
      content: [
        {
          svg: "",
          name: "Auto.js / Termux Automation",
        },
        {
          svg: "",
          name: "Playwright",
        },
        {
          svg: "",
          name: "OCR (OpenCV)",
        },
        {
          svg: "",
          name: "Android Device Control & Scripting",
        },
        {
          svg: "",
          name: "Multi-account Automation (AdsPower)",
        },
      ],
    },
    {
      title: "Frontend Development",
      content: [
        // 前端开发&框架
        {
          svg: "",
          name: "React / Next.js",
        },
        {
          svg: "",
          name: "Vue",
        },
        // 前端语言
        {
          svg: "",
          name: "JavaScript / TypeScript",
        },
        // 包
        {
          svg: "",
          name: "Vite / Webpack",
        },
        // 前端库
        {
          svg: "",
          name: "Tailwind CSS / Element Plus / Ant Design",
        },
        // 前端技术
        {
          svg: "",
          name: "Responsive UI / SSR / SEO",
        },
        {
          svg: "",
          name: "Zustand / Pinia",
        },
      ],
    },
    {
      title: "Backend Development",
      content: [
        // 后端开发&框架
        {
          svg: "",
          name: "FastAPI",
        },
        {
          svg: "",
          name: "Node.js(basic)",
        },
        // API设计
        {
          svg: "",
          name: "REST API Design",
        },
        // 异步编程
        {
          svg: "",
          name: "AsyncIO / Task Scheduling",
        },
      ],
    },
    {
      title: "AI / LLM",
      content: [
        {
          svg: "",
          name: "LLaMA / Qwen (GGUF inference)",
        },
        {
          svg: "",
          name: "LLM Integration (RAG, Summarization, Generation)",
        },
        {
          svg: "",
          name: "API Models: OpenAI / Gemini / Qwen",
        },
        {
          svg: "",
          name: "Local Model Deployment (GGUF / Quantization)",
        },
        {
          svg: "",
          name: "Prompt Engineering",
        },
      ],
    },
    {
      title: "Databases / Hosting",
      content: [
        {
          svg: "",
          name: "aliyun",
        },
        {
          svg: "",
          name: "vercel",
        },
        {
          svg: "",
          name: "github pages",
        },
        {
          svg: "",
          name: "PostgreSQL",
        },
        {
          svg: "",
          name: "MySQL",
        },
        {
          svg: "",
          name: "SQLite",
        },
        {
          svg: "",
          name: "Docker",
        },
      ],
    },
    {
      title: "IDEs / Tools",
      content: [
        {
          svg: "",
          name: "Cursor",
        },
        {
          svg: "",
          name: "Visual Studio Code",
        },
        {
          svg: "",
          name: "WebStorm",
        },
        {
          svg: "",
          name: "PyCharm",
        },
        {
          svg: "",
          name: "Git / GitHub",
        },
        {
          svg: "",
          name: "Postman/ Apifox",
        },
      ],
    },
  ];
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment, data };
});
