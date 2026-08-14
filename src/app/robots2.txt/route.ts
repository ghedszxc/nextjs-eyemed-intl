import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const contents = `User-Agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: https://www.eyemedinternational.com/sitemap.xml`;
  const response = new Response(contents, {
    status: 200,
    statusText: "ok",
  });

  response.headers.append("content-type", "text/plain");
  return response;
}
