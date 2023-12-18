// import { hydrate as AppHyrdrate } from "./App";
import { localStorageVersionCheck } from "./localStorageVersionCheck";

const hydrate = async (): Promise<void> => {
  //ensure we're not hydrating an old version which will break the app
  console.log("ehre")
  await localStorageVersionCheck();

  // await AppHyrdrate();
};

export const stores = {
  hydrate,
};
