import { IPhotoList3 } from '@/widgets/PhotoList3/PhotoList3.interface';
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import AppConfig from "@/logic/configs/AppConfig";
import { getAkamayUrl, removeCMTextHyphen } from '@/logic/utilities';

export class PhotoList3Adapter extends Adapter<
  IPhotoList3,
  Nullable<IPhotoList3>
> {
  adapt: (source: any) => Nullable<IPhotoList3> = (source) => {
    if (!source.length) return null;

    const data = source[0];

    const photos = data.items.map((item: any, i: number) => ({
      imgUri: item?.data.uri,
      title: item.title,
      longText: AppConfig.html(item.detailText?.text),
      altText: item?.alt || `photo ${i + 1}`
    }));
    
    const header1 = removeCMTextHyphen(data?.collectionTitle);
    const header2 = removeCMTextHyphen(data?.collectionSubTitle);

    return {
      header1,
      header2,
      photoList: photos
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
