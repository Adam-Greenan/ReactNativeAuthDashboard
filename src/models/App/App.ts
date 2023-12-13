import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist} from 'mobx-state-tree-persist';
import {types, Instance, SnapshotIn, flow} from 'mobx-state-tree';

const INITIAL_STATE = {
  auth: false,
};

export const App = types
  .model({
    auth: types.boolean,
    user: types.maybe(
      types.model({
        firstname: types.string,
        lastname: types.string,
        email: types.string,
      }),
    ),
  })
  .views(self => ({}))
  .actions(self => ({
    setAuth(auth: boolean) {
      self.auth = auth;
    },
    setUser(user: any) {
      self.user = user;
    },
  }));

export interface IApp extends Instance<typeof App> {}
export interface IAppState extends SnapshotIn<typeof App> {}

export const app = App.create(INITIAL_STATE);

export const persistStore = persist([
  [app, {key: 'app', storage: AsyncStorage}],
]);
