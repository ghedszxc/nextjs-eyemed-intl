import { cmsRepo } from "@/logic/graphql/CMSRepo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const { data } = await cmsRepo.getContentById(id);

    return NextResponse.json(data.content.content);
  } else {
    return NextResponse.json(null);
  }
}
