import { cmsRepo } from "@/logic/graphql/CMSRepo";
import { getAkamayUrl } from "@/logic/utilities";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang");
  const path = searchParams.get("path");

  try {
    const cmsResp = await cmsRepo.getMetaData(`os-${lang}`, path || "/");
    const data = cmsResp?.data?.content?.pageByPath;

    // Fetch meta data image by id
    const metaImageID = data.settings.MetaImg?.[0].replace(/Content\[coremedia:\/\/\/cap\/content\/|]/g, "");
    const metaImageResp = await cmsRepo.getFileLink(metaImageID);
    const akamaiImageURL = metaImageResp?.data?.content?.content?.data?.uri ? getAkamayUrl(metaImageResp?.data?.content?.content?.data?.uri) : ""

    return NextResponse.json(
      { 
        title: data?.title, 
        description: data?.htmlDescription,
        metaDataImage: akamaiImageURL, 
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(null, { status: 404 });
  }
}
