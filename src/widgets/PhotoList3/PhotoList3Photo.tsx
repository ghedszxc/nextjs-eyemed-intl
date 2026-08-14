import Picture from "@/components/Picture/Picture";
import { IPhotoList } from "./PhotoList3.interface";

const PhotoList = ({ longText, imgUri, title, altText }: IPhotoList) => {
  return (
    <div className="relative overflow-hidden">
      {imgUri && (
        <Picture
          alt={altText || ''}
          src={imgUri}
          width={300}
          height={300}
          className="w-full h-full"
        />
      )}
      <div className="text-white backdrop-blur-[14px] p-8 bg-black bg-opacity-25 absolute bottom-0 w-full min-h-[176px]">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <div>{longText}</div>
      </div>
    </div>
  );
};

export default PhotoList;
