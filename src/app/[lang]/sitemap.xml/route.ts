import { NextRequest } from "next/server";
import { getLocale } from "../../../lib/utils";
import { StaticPathsAdapter } from "../../../adapters/staticPathsAdapter";
import { cmsRepo } from "../../../logic/graphql/CMSRepo";
import { defaultLocale, locales } from "../../../middleware";
import { generateSitemap } from "../../../lib/utils";
import { localeSegmentRemoval } from "@/logic/utilities";
import { SITEMAP_TO_REMOVE } from "@/logic/configs/constants/SITEMAP_TO_REMOVE";

interface ICMSPathIds {
  id: string;
  root: {
    segment: string;
  };
  modificationDate: string;
  hiddenInSitemap: boolean;
}

export interface IFilteredLocalePaths {
  path: string,
  modificationDate: string,
  isPriority: boolean,
}

interface IAdaptedRes {
  params: { slug: string; page: string[] };
  locale: string;
  modificationDate: string;
}

export async function GET(request: NextRequest) {
  const locale = getLocale(request);
  const url = new URL(request.url);
  const { protocol, host } = url;

  try {
    // CMS Request
    const adapter = new StaticPathsAdapter();

    const cmsPathIds = await cmsRepo.getPathsId();
  
    const pathIdArr = cmsPathIds?.data?.content?.sites?.map((site: ICMSPathIds) => {
      return {
        id: site.id,
        locale: localeSegmentRemoval(site.root.segment)?.replace("/", "") || "en",
        modificationDate: site?.modificationDate || "",
        hiddenInSitemap: site?.hiddenInSitemap || false,
      };
    })
    .filter((pathId: { locale: string }) => locales.includes(pathId.locale));
    const currentLocale = pathIdArr.find(
      (path: { locale: string }) => path.locale === locale
    );

    const pathsData = await cmsRepo.getPathsData(currentLocale.id);
    const adaptedRes = adapter
      .adapt(pathsData)
      .filter(
        (adapted: { hiddenInSitemap: boolean }) =>
          adapted.hiddenInSitemap === false
      );

    const filteredLocalePaths: IFilteredLocalePaths[] | null = adaptedRes?.map((path: IAdaptedRes) => {
      const isRoot = path?.params?.slug?.length <= 0;

      const page = path?.params?.page?.join("/");
      const isToRemove = SITEMAP_TO_REMOVE.includes(page);

      if(isToRemove) return null;
      return {
        path: isRoot
          ? (`${process.env.NEXT_PUBLIC_DOMAIN}${path.locale}/`).replace(`/${defaultLocale}`, "")
          : (`${process.env.NEXT_PUBLIC_DOMAIN}${path.locale}/${page}${page ? "/" : ""}`).replace(`/${defaultLocale}`, ""),
        modificationDate: path.modificationDate,
        isPriority: isRoot,
      };
    });

    // Check the current environment
    const isUAT = host?.includes("uat");

    if (isUAT) {
      // If in UAT, do not generate the sitemap, and return an empty response.
      const response = new Response(JSON.stringify("404", null, 4), {
        status: 404,
        statusText: "ok",
      });

      return response;
    }

    const sitemap = generateSitemap(
      locale || null,
      filteredLocalePaths,
      locales,
      protocol,
      host
    );

    const response = new Response(sitemap, {
      status: 200,
      statusText: "ok",
    });

    response.headers.append("content-type", "text/xml");
    return response;
  } catch (err) {
    // console.log(err);

    const response = new Response(JSON.stringify(err, null, 4), {
      status: 404,
      statusText: "ok",
    });

    return response;
  }
}
