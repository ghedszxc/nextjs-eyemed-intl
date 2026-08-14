import React from "react";
import { IPadding } from "@/models/IPadding";

export interface IArticleText extends IPadding {
  title1: string;
  bodyText: React.ReactNode;
}
