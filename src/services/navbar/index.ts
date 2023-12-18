import { INavbarService } from "./INavbarService";
import service from "./NavbarProvider";

export * from "./INavbarService";

export const navbar: INavbarService = service;
