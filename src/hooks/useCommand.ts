import { useLocalObservable } from "mobx-react";
import { observable } from "mobx";
import { ICommand } from "commands/ICommand";

export const useCommand = <T extends ICommand>(command: () => T) => {
  const store = useLocalObservable(() => observable.box(command()));
  return store.get();
};
