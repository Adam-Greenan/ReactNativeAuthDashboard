import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";

export const localStorageVersionCheck = async () => {
  const VERSION_KEY = `@chatApp-${Config.NODE_ENV}-version`;
  const VERSION = `${Config.STORAGE_VERSION}`;
  const currentVersion = `${await AsyncStorage.getItem(VERSION_KEY)}`;

  // if current version is not set or different then clear AsyncStorage of all @har-mse keys
  if (currentVersion !== VERSION) {
    const stores = await AsyncStorage.getAllKeys();

    for (const store of stores) {
      if (store.startsWith(`@chatApp-${Config.NODE_ENV}`)) {
        await AsyncStorage.removeItem(store);
      }
    }
  }

  if (Config.STORAGE_VERSION) {
    AsyncStorage.setItem(VERSION_KEY, Config.STORAGE_VERSION);
  }

  Promise.resolve();
};
