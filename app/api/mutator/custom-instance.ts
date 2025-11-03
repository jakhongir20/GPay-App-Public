import { BASE_URL } from "../config";

export const customInstance = async <T>(
  config: {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    params?: any;
    data?: any;
    headers?: Record<string, string>;
  },
  options?: {
    signal?: AbortSignal;
  }
): Promise<T> => {
  const url = new URL(config.url, BASE_URL);

  // Add query parameters
  if (config.params) {
    Object.keys(config.params).forEach((key) => {
      if (config.params[key] !== undefined && config.params[key] !== null) {
        url.searchParams.append(key, String(config.params[key]));
      }
    });
  }

  const response = await fetch(url.toString(), {
    method: config.method,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
    body: config.data ? JSON.stringify(config.data) : undefined,
    signal: options?.signal,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  // Handle empty responses
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json() as Promise<T>;
  }

  return response.text() as Promise<T>;
};

