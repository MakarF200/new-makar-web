// utils/formSubmit.ts
export async function submitForm<T extends Record<string, any>>(
  url: string,
  data: T,
  contentType: "json" | "form" = "json"
): Promise<Response> {
  let body: BodyInit;

  if (contentType === "json") {
    body = JSON.stringify(data);
  } else {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      // 处理对象或数组
      if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });
    body = formData;
  }

  const headers: HeadersInit =
    contentType === "json"
      ? { "Content-Type": "application/json" }
      : {};

  const res = await fetch(url, {
    method: "POST",
    headers,
    body,
  });

  if (!res.ok) {
    throw new Error(`表单提交失败: ${res.status}`);
  }

  return res;
}
