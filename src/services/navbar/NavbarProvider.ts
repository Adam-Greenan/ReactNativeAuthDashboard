import { generateRandomToken } from "utils/helpers";

import { INavbarService } from "./INavbarService";
import { NavBarConfig, NavBarIdConfig } from "./NavBarConfig";
import { NavBarConfigCallback } from "./NavBarElementCallback";

const registrations: Array<{
  id: string;
  callback: NavBarConfigCallback;
}> = [];

let currentConfig: NavBarConfig | null = null;

const register = (callback: NavBarConfigCallback) => {
  let id: string;
  do {
    id = generateRandomToken();
  } while (registrations.findIndex((r) => r.id === id) >= 0);

  registrations.push({
    id,
    callback,
  });

  return { id, ...Object.assign({}, currentConfig) } as NavBarIdConfig;
};

const unregister = (id: string) => {
  const index = registrations.findIndex((r) => r.id === id);

  registrations.splice(index, 1);
};

const setConfig = (config: NavBarConfig) => {
  currentConfig = config;

  for (const registration of registrations) {
    registration.callback(config);
  }
};

export default {
  unregister,
  register,
  setConfig,
} as INavbarService;
