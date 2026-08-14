import { IFilteredLocalePaths } from "@/app/[lang]/sitemap.xml/route";
import { locales } from "@/middleware";
import { Nullable } from "@/models/Nullable.interface";
import { type ClassValue, clsx } from "clsx"
import { NextRequest } from "next/server";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateSitemap = (
  locale: string | null,
  filteredLocalePaths: Nullable<IFilteredLocalePaths[]>,
  cmsLocales: string[],
  protocol: string,
  host: string
) => {
  if (locale) {
    // Locale
    return `
        <urlset 
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        >
          ${filteredLocalePaths
            ?.filter((path) => !!path)
            ?.map((path) => {
              const modDate = path?.modificationDate?.replace(/Z\[GMT\]/, "");

              return `
              <url>
                <loc>${path?.path}</loc>
                <lastmod>${modDate}+00:00</lastmod>
                <priority>${path?.isPriority ? "1.0" : "0.8"}</priority>
              </url>`;
            })
            .join("")}
        </urlset>
      `;
  } else {
    // Index
    return `
      <sitemapindex xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${cmsLocales
          ?.map((x: string) => {
            return `<sitemap><loc>${process.env.NEXT_PUBLIC_DOMAIN}${
              x ? x + "/" : ""
            }sitemap.xml</loc></sitemap>`;
          })
          .join("")}
      </sitemapindex>
      `;
  }
};


export function getLocale(request: NextRequest) {
  const locale = request.nextUrl.pathname
    .split("/")
    .filter((route: string) => !!route)?.[0];
  const currentLocale = locales.find((item: string) => item === locale);

  return currentLocale;
};
