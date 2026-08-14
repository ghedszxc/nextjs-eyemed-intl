import React from "react";
import { IIconTypes } from "@/components/Icon/Icon.interface";
import { ICta } from "@/models/components/ICta";
import { IUrl } from "@/models/IUrl.interface";

export interface IFooter {
  links: ICta[];
  subLinks: ICta[];
  copyright: React.ReactNode;
  social: ISocial[];
  url?: IUrl;
  logo?: string;
}

export interface ISocial {
  icon: string;
  url: string;
  altText?: string;
  logo?: string;
}
