import { INavigation } from "@/widgets/Navigation/Navigation.interface";

export interface IDesktopNavigation extends Omit<INavigation, "legalLinks"> {}
export interface IDesktopNavigationLinkList extends IDesktopNavigation {
  isActive: boolean;
}

export interface IDesktopNavigationMainLink extends  Omit<IDesktopNavigation, "legalLinks" | "localeLinks"> {}
export interface IDesktopNavigationLocaleLink extends  Omit<IDesktopNavigation, "mainLinks" | "legalLinks"> {}