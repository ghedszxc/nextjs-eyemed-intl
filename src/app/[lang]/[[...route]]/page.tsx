import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cmsRepo } from "@/logic/graphql/CMSRepo";
import { jsonToLayoutAdapter } from "@/adapters/JsonToLayoutAdapter";
import getMetaData from "@/actions/getMetadata";

// Components
import Layout from "@/layouts/Layout";
import { defaultLocale, locales } from "@/middleware";

export const revalidate = 60;

type Props = {
  params: Promise<{ lang: string; route: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, route } = await params;
  const metadata = await getMetaData(lang, route?.join("/"));
  const languages: { [key: string]: string } = {};
  const pathname = ["", ...(route || [])].join("/") || "/";

  const canonical = lang === defaultLocale ? pathname : ["", lang, ...(route || [])].join("/");

  if (pathname) {
    for (const key in locales) {
      if(lang === locales[key]) continue;

      if (Object.prototype.hasOwnProperty.call(locales, key)) {
        const href = pathname.replace(`/${lang}`, "");
        if (locales[key] === defaultLocale) {
          languages[defaultLocale] = href;
        } else {
          const element = locales[key];
          languages[element] = `/${element}${href}`;
        }
      }
    }
  }


  try {
    const meta: Metadata = {
      metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
      title: metadata.title || "404 - Page Not Found",
      description: metadata.description,
      robots: { index: true, follow: true },
      icons: [{ type: "image/x-icon", rel: "icon", url: "/favicon.ico" }],
      alternates: {
        canonical: canonical,
        languages: languages
      }
    };

    meta.openGraph = {
      title: metadata?.title,
      description: metadata?.description,
      images: [{ url: metadata?.metaDataImage }],
      type: "website",
    };

    meta.twitter = {
      title: metadata?.title,
      description: metadata?.description,
      images: [{ url: metadata?.metaDataImage }],
    };

    return meta;
  } catch (err) {
    return {
      title: "404",
      description: "404",
      robots: { index: false, follow: false },
    };
  }
}

/**
 * Based on CoreMedia GraphQL structure,
 * we are going to use one single page template
 * and layout. Our current query will only request
 * data based on the current page path
 * e.g. en/brands/brand-1 {locale}/{path}
 */
export default async function PageGenerator({ params }: Props) {
  const { route, lang } = await params;

  const cmsResp = await cmsRepo.getLayoutData(`${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}`, (route || []).join("/"));
  const layoutData = jsonToLayoutAdapter.adapt(cmsResp);
  
  const url = {
    route: route,
    locale: lang,
  };

  if (!layoutData?.widgets?.length) notFound();

  return (
    <div>
      <Layout data={layoutData} url={url} />
    </div>
  );
}
