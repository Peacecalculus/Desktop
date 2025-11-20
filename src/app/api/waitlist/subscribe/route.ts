// app/api/waitlist/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';

const UPSTREAM_API = 'http://54.163.209.136:5000/api/waitlist/subscribe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const upstreamResponse = await fetch(UPSTREAM_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await upstreamResponse.json();

    console.log('[Waitlist Proxy] Success:', data);

    return NextResponse.json(data, { status: upstreamResponse.status });
  } catch (error: unknown) {
    console.error('[Waitlist Proxy] Failed:', (error as Error).message);

    return NextResponse.json(
      {
        status: 'error',
        message: 'Service temporarily unavailable. Please try again later.',
      },
      { status: 503 }
    );
  }
}
