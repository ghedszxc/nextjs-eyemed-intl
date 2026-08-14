import {
  IPhotoList,
  IPhotoList2,
} from "@/widgets/PhotoList2/PhotoList2.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA } from "@/logic/utilities";

export class PhotoList2Adapter extends Adapter<
  IPhotoList2,
  Nullable<IPhotoList2>
> {
  adapt: (source: any) => Nullable<IPhotoList2> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    const ctas = getAdapterCTA(data?.teaserTargets);

    return {
      sectionTitle: data?.teaserTitle,
      longText: data?.teaserText?.text,
      padding: "both",
      photoList: (data?.pictures || []).map(
        (
          pic: {
            title?: string;
            alt?: string;
            detailText?: { text: string };
            data?: { uri: string };
          },
          key: number
        ): IPhotoList => ({
          title: pic?.title,
          longText: pic?.detailText?.text,
          photos: pic?.data?.uri,
          cta: ctas[key],
          altText: pic?.alt ||  `photo link ${key + 1}`
        })
      ),
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
