import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://54.163.209.136:5000/api/v1";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("Proxying signup request:", body); // Debug log

    const response = await fetch(`${BACKEND_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    console.log("Backend response:", data); // Debug log

    // Return the response with the same status code from backend
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "Internal server error",
        status_code: 500,
      },
      { status: 500 }
    );
  }
}
