import { useEffect } from "react";

import { observable } from "mobx";
import { useLocalObservable } from "mobx-react";

import { IDataAdapter } from "adapters/IDataAdapter";

export const useDataAdapter = <TAdapter extends IDataAdapter>(
  adapter: () => TAdapter,
): TAdapter => {
  const store = useLocalObservable(() => observable.box(adapter()));

  useEffect(() => {
    const localStore = store.get();
    if (!localStore.pending) {
      localStore.fill();
    }
    return () => {};
  }, [store]);

  return store.get();
};
