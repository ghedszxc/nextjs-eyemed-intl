import Picture from "@/components/Picture/Picture";
import { IPhotoList } from "./PhotoList1.interface";

const PhotoList = ({ uri }: IPhotoList) => {
  return (
    <div className="relative hover-parent overflow-hidden px-0 lg:px-1">
      {uri && (
        <Picture
          alt="sample"
          src={uri}
          width={300}
          height={300}
          className="w-full h-full"
        />
      )}
      {/* <div className="text-white backdrop-blur-[14px] p-8 bg-black bg-opacity-25 absolute bottom-0 w-full lg:min-h[176px] min-h-[152px]">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <div>{longText}</div>
      </div> */}
    </div>
  );
};

export default PhotoList;
