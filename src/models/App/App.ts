import AsyncStorage from "@react-native-async-storage/async-storage";
import { types, Instance, SnapshotIn } from "mobx-state-tree";
import { persist } from "mobx-state-tree-persist";

const INITIAL_STATE: IAppState = {
  user: {
    authenticated: false,
  },
};

export const App = types
  .model({
    user: types.model({
      authenticated: types.boolean,
    }),
  })
  .actions((self) => ({}))
  .actions((self) => ({}));

export interface IApp extends Instance<typeof App> {}
export interface IAppState extends SnapshotIn<typeof App> {}

export const app = App.create(INITIAL_STATE);

export const persistStore = persist([
  [app, { key: "app", storage: AsyncStorage }],
]);
