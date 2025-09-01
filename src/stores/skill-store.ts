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
          name: "AI",
        },
        {
          svg: "",
          name: "Figma",
        },
        {
          svg: "",
          name: "Prototyping",
        },
        {
          svg: "",
          name: "Testing",
        },
        {
          svg: "",
          name: "Flowcharts",
        },
        {
          svg: "",
          name: "Diagramming",
        },
        {
          svg: "",
          name: "Photoshop",
        },
      ],
    },
    {
      title: "Development",
      content: [
        // 前端开发&框架
        {
          svg: "",
          name: "React",
        },
        {
          svg: "",
          name: "Vue",
        },
        // 包
        {
          svg: "",
          name: "Vite",
        },
        {
          svg: "",
          name: "Webpack",
        },
        // 前端库
        {
          svg: "",
          name: "Tailwind CSS",
        },
        {
          svg: "",
          name: "Element UI",
        },
        // 后端开发&框架
        {
          svg: "",
          name: "Nuxt",
        },
        {
          svg: "",
          name: "Flask",
        },
        // 后端库
        {
          svg: "",
          name: "jQuery",
        },
        // 语言
        {
          svg: "",
          name: "JavaScript",
        },
        {
          svg: "",
          name: "FastAPI",
        },
        {
          svg: "",
          name: "C&C++",
        },
        // 标记语言
        {
          svg: "",
          name: "HTML",
        },
        {
          svg: "",
          name: "CSS",
        },
        {
          svg: "",
          name: "XML",
        },
        {
          svg: "",
          name: "JSON",
        },
      ],
    },
    {
      title: "Host / Databases",
      content: [
        {
          svg: "",
          name: "aliyun",
        },
        {
          svg: "",
          name: "DCloud",
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
      title: "AI / LLM",
      content: [
        {
          svg: "",
          name: "Qwen.gguf",
        },
        {
          svg: "",
          name: "Llama.gguf",
        },
        {
          svg: "",
          name: "Gemini",
        },
        {
          svg: "",
          name: "ChatGPT",
        },
        {
          svg: "",
          name: "Perplexity",
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
          name: "HBuilderX",
        },
        {
          svg: "",
          name: "PyCharm",
        },
        {
          svg: "",
          name: "Git",
        },
        {
          svg: "",
          name: "Github",
        },
        {
          svg: "",
          name: "Postman",
        },
        {
          svg: "",
          name: "Apifox",
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
