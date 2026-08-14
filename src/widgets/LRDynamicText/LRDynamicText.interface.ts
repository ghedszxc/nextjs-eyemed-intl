import { IPadding } from "@/models/IPadding";

export interface ILRDynamicText extends IPadding {
  header1?: string;
  header2?: string;
  longText?: string;
  picture?: string;
  video?: string;
  direction: "left" | "right";
  bg?: string;
  altText?: string;
}
