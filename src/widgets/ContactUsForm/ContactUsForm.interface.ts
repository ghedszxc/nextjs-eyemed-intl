import React from "react";
import { IUrl } from "@/models/IUrl.interface";

export interface IContactUsForm {
  // privacyPolicy?: string;
  form: IInput[];
  header?: string;
  acknowledge?: React.ReactNode;
  url?: IUrl;
  topicList?: IOption[];
}

export interface IInput {
  type: TInputTypes;
  errorMessage: string;
  label: string;
  options?: IOption[];
  name: string;
  placeholder?: string;
  description?: string;
}

export type TInputTypes =
  | "textboxName"
  | "textboxSurname"
  | "selectCountry"
  | "textboxEmail"
  // | "topicList"
  | "selectTopic"
  | "textboxTitleMessage"
  | "textboxMessage";

export interface IOption {
  label: string;
  value: string;
}