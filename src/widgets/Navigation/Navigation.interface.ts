import { ICta } from "@/models/components/ICta";
import { IUrl } from "@/models/IUrl.interface";

export interface INavigation {
  mainLinks: ICta[];
  localeLinks: ICta[];
  legalLinks: ICta[];
  url?: IUrl;
  logo?: string;
}
