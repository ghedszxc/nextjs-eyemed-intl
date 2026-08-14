import { NextRequest } from "next/server";
import { generateSitemap } from "../../lib/utils";
import { locales } from "../../middleware";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const { protocol, host } = url;
  
  try {
    const sitemap = generateSitemap(null, [], locales, protocol, host);
    
    const response = new Response(sitemap, {
      status: 200,
      statusText: "ok",
    });
    
    response.headers.append("content-type", "text/xml");

    return response;
  } catch (err) {
    console.log(err);

    const response = new Response(JSON.stringify(err, null, 4), {
      status: 404,
      statusText: "ok",
    });

    return response;
  }
}
