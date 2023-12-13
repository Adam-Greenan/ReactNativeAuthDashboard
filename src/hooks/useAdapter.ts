import { observable } from "mobx";
import { useLocalObservable } from "mobx-react";
import { IAdapter } from "../adapters/IAdapter";

export const useAdapter = <TAdapter extends IAdapter>(
  adapter: () => TAdapter,
): TAdapter => {
  const store = useLocalObservable(() => observable.box(adapter()));
  return store.get();
};
