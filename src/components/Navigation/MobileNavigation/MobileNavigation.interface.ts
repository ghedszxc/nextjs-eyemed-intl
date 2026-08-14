import { INavigation } from "@/widgets/Navigation/Navigation.interface";

export interface IMobileNavigation extends INavigation {}
export interface IMobileNavigationLinkList extends IMobileNavigation {
  isActive: boolean;
}

export interface IMobileNavigationMainLink extends  Omit<IMobileNavigation, "legalLinks" | "localeLinks"> {}
export interface IMobileNavigationLocaleLink extends  Omit<IMobileNavigation, "mainLinks" | "legalLinks"> {}
export interface IMobileNavigationLegalLink extends  Omit<IMobileNavigation, "mainLinks" | "localeLinks"> {}
