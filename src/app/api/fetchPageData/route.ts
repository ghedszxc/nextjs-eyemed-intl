import { jsonToLayoutAdapter } from "@/adapters/JsonToLayoutAdapter";
import { cmsRepo } from "@/logic/graphql/CMSRepo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang");
  const path = searchParams.get("path");

  try {
    const cmsResp = await cmsRepo.getLayoutData(`${lang}`, path || "/");
    const layoutData = jsonToLayoutAdapter.adapt(cmsResp);

    if (!!(layoutData?.widgets || []).length) {
      return NextResponse.json({ ...layoutData });
    } else {
      return NextResponse.json(null, { status: 404 });
    }
  } catch (err) {
    console.log(err);

    return NextResponse.json({ status: 404 }, { status: 404 });
  }
}
