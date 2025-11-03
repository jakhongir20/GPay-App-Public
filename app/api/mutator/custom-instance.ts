import { BASE_URL } from "../config";

// Check if we're running on the client side
const isClient = typeof window !== "undefined";

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
  let url: URL;
  
  if (isClient) {
    // Client-side: use proxy route to avoid CORS
    const proxyPath = config.url.startsWith("/") ? config.url.slice(1) : config.url;
    url = new URL(`/api/proxy/${proxyPath}`, window.location.origin);
  } else {
    // Server-side: use direct ngrok URL
    url = new URL(config.url, BASE_URL);
  }

  // Add query parameters
  if (config.params) {
    Object.keys(config.params).forEach((key) => {
      if (config.params[key] !== undefined && config.params[key] !== null) {
        url.searchParams.append(key, String(config.params[key]));
      }
    });
  }

  // Add ngrok-skip-browser-warning header for ngrok URLs
  const headers: Record<string, string> = {
    ...config.headers,
  };

  // Only add Content-Type for requests with body
  if (config.data || config.method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  // Only add ngrok header when making direct requests (server-side)
  if (!isClient) {
    const isNgrokUrl = BASE_URL.includes("ngrok-free.app") || 
                        BASE_URL.includes("ngrok.io") ||
                        url.toString().includes("ngrok-free.app") ||
                        url.toString().includes("ngrok.io");

    if (isNgrokUrl) {
      // Use "any" value which ngrok accepts to bypass browser warning
      headers["ngrok-skip-browser-warning"] = "any";
    }
  }

  const response = await fetch(url.toString(), {
    method: config.method,
    headers,
    body: config.data ? JSON.stringify(config.data) : undefined,
    signal: options?.signal,
  });

  // Check if response is the ngrok warning page HTML (server-side only)
  if (!isClient) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("text/html")) {
      const text = await response.clone().text();
      if (text.includes("ERR_NGROK_6024") || text.includes("ngrok.com")) {
        throw new Error(
          "Ngrok browser warning detected. The ngrok-skip-browser-warning header should bypass this. " +
          "Please check that the header is being sent correctly or contact your backend team."
        );
      }
    }
  }

  if (!response.ok) {
    let errorText = response.statusText;
    try {
      const clonedResponse = response.clone();
      errorText = await clonedResponse.text();
    } catch {
      // Ignore errors reading error response
    }
    throw new Error(`API Error: ${response.status} ${response.statusText}. ${errorText}`);
  }

  // Handle empty responses
  if (contentType && contentType.includes("application/json")) {
    return response.json() as Promise<T>;
  }

  return response.text() as Promise<T>;
};

