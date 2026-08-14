import { ICta } from "@/models/components/ICta";
import { IPadding } from "@/models/IPadding";

export interface IPhotoList {
  title?: string;
  longText?: string;
  photos?: string;
  cta?: ICta;
  altText?: string
}

export interface IPhotoList2 extends IPadding {
  sectionTitle?: string;
  longText?: string;
  photoList?: IPhotoList[];
}
