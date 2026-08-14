import { IPadding } from "@/models/IPadding";

export interface IPhotoList {
  imgUri?: string;
  title?: string;
  longText?: string;
  altText?: string
}

export interface IPhotoList3 extends IPadding {
  header1?: string;
  header2?: string;
  photoList?: IPhotoList[];
}
