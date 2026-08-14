"use client";
import Picture from "@/components/Picture/Picture";
import { IPhotoList } from "./PhotoList2.interface";
import AppConfig from "@/logic/configs/AppConfig";
import Anchor from "@/components/Anchor/Anchor";

const PhotoList = ({ photos, title, longText, cta, altText }: IPhotoList) => {
  const url = cta?.url || "#";

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = url;
  };

  return (
    <Anchor
      href={url}
      className="relative overflow-hidden px-0 parent-box border-2 border-transparent focus:border-black"
      onClick={handleLinkClick}
    >
      {photos && (
        <>
          <Picture
            alt={altText || ""}
            src={photos}
            width={300}
            height={300}
            className="w-full h-full"
          />
          <div className="backdrop"></div>
          <div className="hidden-box text-sm lg:text-md">
            <div className="font-bold h-16">{title}</div>
            <div className="font-normal">{AppConfig.html(longText)}</div>
          </div>
        </>
      )}
    </Anchor>
  );
};

export default PhotoList;
