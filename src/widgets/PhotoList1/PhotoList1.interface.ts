import React from "react";
import { IPadding } from "@/models/IPadding";
import { ICta } from "@/models/components/ICta";

export interface IPhotoList {
  uri: string;
  size: number;
  contentType: string;
}

export interface IPhotoList1 extends IPadding {
  title1?: string;
  longText?: React.ReactNode;
  photoList?: IPhotoList[];
  
  ctaButton?: ICta;
  quoteText?: string;
}
