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
      firstName: types.maybe(types.string),
      lastName: types.maybe(types.string),
    }),
  })
  .actions((self) => ({
    setAuthenticated(authenticated: boolean) {
      self.user.authenticated = authenticated;
    },
    setUser(user: { firstName: string; lastName: string }) {
      self.user.firstName = user.firstName;
      self.user.lastName = user.lastName;
    },
  }));

export interface IApp extends Instance<typeof App> {}
export interface IAppState extends SnapshotIn<typeof App> {}

export const app = App.create(INITIAL_STATE);

export const persistStore = persist([
  [app, { key: "app", storage: AsyncStorage }],
]);
