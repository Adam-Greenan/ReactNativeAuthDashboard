import { useLocalObservable } from "mobx-react";
import { observable } from "mobx";
import { IDataAdapter } from "adapters/IDataAdapter";
import { useEffect } from "react";

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
