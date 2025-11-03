import { NextRequest, NextResponse } from "next/server";

const NGROK_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://94d4877346c1.ngrok-free.app/";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "GET");
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "POST");
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "PUT");
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "PATCH");
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "DELETE");
}

async function handleRequest(
  request: NextRequest,
  params: Promise<{ path: string[] }>,
  method: string
) {
  try {
    // Await params in Next.js 15+
    const resolvedParams = await params;
    
    // Reconstruct the path
    const path = resolvedParams.path.join("/");
    const url = new URL(path, NGROK_BASE_URL);

    // Forward query parameters
    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    // Prepare headers
    const headers: Record<string, string> = {
      "ngrok-skip-browser-warning": "any",
    };

    // Forward relevant headers (excluding host, connection, etc.)
    const forwardHeaders = [
      "authorization",
      "content-type",
      "accept",
      "accept-language",
    ];

    forwardHeaders.forEach((headerName) => {
      const value = request.headers.get(headerName);
      if (value) {
        headers[headerName] = value;
      }
    });

    // Get request body if present
    let body: string | undefined;
    if (method !== "GET" && method !== "DELETE") {
      try {
        body = await request.text();
      } catch {
        // No body
      }
    }

    // Make request to ngrok backend
    const response = await fetch(url.toString(), {
      method,
      headers,
      body,
    });

    // Get response data
    const contentType = response.headers.get("content-type");
    let responseData: any;

    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      const text = await response.text();
      // Try to parse as JSON if possible
      try {
        responseData = JSON.parse(text);
      } catch {
        responseData = text;
      }
    }

    // Return response with CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (contentType && contentType.includes("application/json")) {
      return NextResponse.json(responseData, {
        status: response.status,
        headers: corsHeaders,
      });
    }

    return new NextResponse(responseData, {
      status: response.status,
      headers: {
        ...corsHeaders,
        "Content-Type": contentType || "text/plain",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Proxy request failed", message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

