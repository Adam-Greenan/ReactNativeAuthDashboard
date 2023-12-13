import { computed, makeObservable } from "mobx";
import { IAdapter } from "adapters/IAdapter";

export interface I{{pascalCase name}} {}

export class {{pascalCase name}}Adapter implements IAdapter<I{{pascalCase name}}> {
  constructor() {
    makeObservable(this)
  }
  
  @computed
  public get data(): I{{pascalCase name}} | null {
    return null;
  }
}
