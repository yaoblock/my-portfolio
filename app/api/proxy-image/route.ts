import { NextRequest, NextResponse } from "next/server";

const ALLOWED_ORIGINS = ["https://img2.doubanio.com", "https://img1.doubanio.com", "https://img3.doubanio.com", "https://image.tmdb.org"];

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }
  const origin = `${parsed.protocol}//${parsed.host}`;
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
  }
  const res = await fetch(url, {
    headers: { Referer: "" },
    cache: "force-cache",
  });
  if (!res.ok) {
    return NextResponse.json({ error: "Upstream error" }, { status: res.status });
  }
  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const body = await res.arrayBuffer();
  return new NextResponse(body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
