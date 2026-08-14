"use client";

import AnimateSwipe from "@/components/utils/AnimateSwipe";
import { IPhotoList2 } from "./PhotoList2.interface";
import PhotoList from "./PhotoList2Photo";
import AppConfig from "@/logic/configs/AppConfig";

const PhotoList2 = ({ sectionTitle, longText, photoList }: IPhotoList2) => {
  return (
    <div className={`flex flex-col gap-2 bg-gray-100 py-20 px-5 md:px-10 text-center`}>
      <div className="max-w-[956px] mx-auto">
        <AnimateSwipe>
          {sectionTitle && (
            <h2 className="text-[32px] leading-[42px] lg:text-3xl font-bold">
              {sectionTitle}
            </h2>
          )}
        </AnimateSwipe>

        <AnimateSwipe>
          {longText && <div className="text-lg text-center mt-5">{AppConfig.html(longText)}</div>}
        </AnimateSwipe>
      </div>
      
      <AnimateSwipe>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
          {photoList?.map((photo, index) => <PhotoList key={index} {...photo} />)}
        </div>
      </AnimateSwipe>
    </div>
  );
};

export default PhotoList2;
