import { hydrate as AppHyrdrate } from "./App";

const hydrate = async (): Promise<void> => {
  await AppHyrdrate();
};

export const stores = {
  hydrate,
};
