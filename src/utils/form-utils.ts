// utils/formSubmit.ts
import type { WebDesignData, SubmitMode } from "@/types/project";

export async function submitWebDesignData(
  data: WebDesignData,
  mode: SubmitMode
): Promise<Response> {
  if (mode === "getform") {
    const formData = new FormData();

    // 遍历对象展开所有字段
    for (const key in data) {
      const value = data[key as keyof WebDesignData];

      if (key === "attachment" && value instanceof File) {
        // ✅ 附件（图片/文件）
        formData.append("attachment", value);
      } else if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // ✅ 处理嵌套对象（contactDetails）
        for (const subKey in value) {
          formData.append(
            `${key}[${subKey}]`,
            String(value[subKey as keyof typeof value])
          );
        }
      } else if (Array.isArray(value)) {
        // ✅ 处理数组（technicalSupport）
        value.forEach((v, i) => formData.append(`${key}[${i}]`, String(v)));
      } else {
        // ✅ 普通字段（字符串/数字）
        formData.append(key, String(value));
      }
    }

    return fetch("https://getform.io/f/bwnwxrza", {
      method: "POST",
      body: formData,
    });
  }

  // 另一种模式：JSON 直接提交给后端
  if (mode === "backend") {
    return fetch("/api/web-design", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  // 如果 mode 不匹配，抛出错误
  throw new Error(`不支持的提交模式: ${mode}`);
}
