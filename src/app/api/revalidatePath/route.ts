import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

type TType = "page" | "layout" | undefined;

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  const type = request.nextUrl.searchParams.get("type");
  let pathType: TType;

  if(["layout", "page", null].includes(type)) {
    pathType = type === null ? "page" : type as TType;
  }
  
  if (path) {
    revalidatePath(path, pathType);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
