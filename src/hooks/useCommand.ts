import { observable } from "mobx";
import { useLocalObservable } from "mobx-react";

import { ICommand } from "commands/ICommand";

export const useCommand = <T extends ICommand>(command: () => T) => {
  const store = useLocalObservable(() => observable.box(command()));
  return store.get();
};
