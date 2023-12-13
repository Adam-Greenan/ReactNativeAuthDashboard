import { types, Instance, SnapshotIn, flow } from "mobx-state-tree";

export const {{ pascalCase name }} = types
  .model({})
  .views((self) => ({}))
  .actions((self) => ({}));

export interface I{{ pascalCase name }} extends Instance<typeof {{ pascalCase name }}> {}
export interface I{{ pascalCase name }}State extends SnapshotIn<typeof {{ pascalCase name }}> {}
