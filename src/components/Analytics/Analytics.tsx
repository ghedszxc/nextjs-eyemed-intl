"use client";

// Modules
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";
import useIsSsr from "@/hooks/useIsSsr";

type IAnalyticsProps = {
  pageType?: string;
  prop20?: string;
  lang: string;
};

const Analytics: React.FC<IAnalyticsProps> = ({ pageType, prop20, lang }) => {
  // Hooks
  const [loaded, setLoaded] = useState(false);
  const [userInteract, setUserInteract] = useState(false);

  const path = usePathname();
  const pathArr = (path || "").split("/")?.filter((path: string) => path);
  const isSsr = useIsSsr();

  // Effects
  useEffect(() => {
    if(loaded) return;
    if (!globalThis?.window) return;
    const country = lang.toLocaleUpperCase() === "EN" ? "EU" : lang.toLocaleUpperCase();
    if (!globalThis?.window?.tealium_data2track) {
      window.tealium_data2track = [];
      window.utag_data = {
        Page_Language: lang.toLocaleUpperCase(), // content language two-letter uppercase ISO 639-1 Eg. 'EN"
        Page_Country: country, // country ISO 2 uppercase i.e. 'IT', 'US', 'FR'
      };
    }
    globalThis?.window.tealium_data2track.push({
      id: "VirtualPage-View",
      Page_Language: lang.toLocaleUpperCase(),
      Page_Country: country,
      Page_Type: pageType || "Static",
      Page_Section1: prop20 ? prop20?.replace(/ +/, "") : "Other",
      Page_Section2: pageType === "Error" ? "" : pathArr[0]?.replace(/-/g, "-") || "",
      Page_Platform: "CMS",
      Order_Currency: "USD",
      Page_DeviceType: "D", // M D T X
    });

    if (globalThis?.window) {
      window.TealiumConsentPrivacyLink = function () {
        location.href = lang == "en" ? "/cookie-policy/" : `/${lang}/cookie-policy`;
      };
    }

    setLoaded(true);
  }, [loaded, pageType, pathArr, prop20, lang]);

  useEffect(() => {
    const callBack = () => {
      setUserInteract(true);
    }
    window.addEventListener("touchstart", callBack);
    window.addEventListener("mousemove", callBack);

    return () => {
      window.removeEventListener("touchstart", callBack);
      window.removeEventListener("mousemove", callBack);
    }
  }, []);

  return (
    <div>
      {!isSsr && userInteract && (
        <div>
          <div id="__tealiumGDPRecModal"></div>
          <Script src={process.env.NEXT_PUBLIC_UTAG_SCRIPT} defer />
        </div>
      )}
    </div>
  );
};
export default Analytics;
