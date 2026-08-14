import { IPhotoList1 } from '@/widgets/PhotoList1/PhotoList1.interface';
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import AppConfig from "@/logic/configs/AppConfig";


export class PhotoList1Adapter extends Adapter<
  IPhotoList1,
  Nullable<IPhotoList1>
> {
  adapt: (source: any) => Nullable<IPhotoList1> = (source) => {
    if (!source.length) return null;

    const { teaserText, teaserTitle, teaserTargets, pictures = [] } = source[0];
    const photos = pictures.map(({ data }: { data: unknown }) => data);
    
    return {
        title1: teaserTitle,
        longText: AppConfig.html(teaserText?.text),
        photoList: photos,
        ctaButton: {
          label: teaserTargets[0].callToActionText,
          url: teaserTargets[0].target.url
        },
        quoteText: '',
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
