import { NavBarConfig, NavBarIdConfig } from "./NavBarConfig";
import { NavBarConfigCallback } from "./NavBarElementCallback";

export interface INavbarService {
  register(callback: NavBarConfigCallback): NavBarIdConfig;
  unregister(id: string): void;
  setConfig(config: NavBarConfig): void;
}
