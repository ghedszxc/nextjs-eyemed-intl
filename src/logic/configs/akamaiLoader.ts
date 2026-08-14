import { ImageLoaderProps } from "next/image";
import { getAkamayUrl } from "../utilities";

const akamaiLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const formattedSrc = getAkamayUrl(src);
  
  if (process.env.NODE_ENV === "development") {
    return `${formattedSrc}?w=${width}&q=${quality || 100}`;
  } else {
    return `${formattedSrc}?w=${width}&q=${quality || 100}`;
  }
};

export default akamaiLoader;
