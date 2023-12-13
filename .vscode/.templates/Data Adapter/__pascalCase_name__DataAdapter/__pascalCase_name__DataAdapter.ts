import { observable, computed, action, makeObservable } from "mobx";
import { IDataAdapter } from "adapters/IDataAdapter";
import { diagnostics } from "services/diagnostics";

export interface I{{pascalCase name}} {}

export class {{pascalCase name}}DataAdapter implements IDataAdapter<I{{pascalCase name}}> {
  constructor() {
    makeObservable(this)
  }
  
  @observable
  private current?: I{{pascalCase name}};

  @observable
  private isPending: boolean = false;

  @computed
  public get pending(): boolean {
    return this.isPending;
  }

  @computed
  public get data(): I{{pascalCase name}} | null {
    return this.current ?? null;
  }

  @action
  public async fill(): Promise<void> {
    this.isPending = true;
    
    try {
      throw new Error("Method not implemented");
    } catch (err) {
      diagnostics.logException(err);
      // handle error
    } finally {
      this.isPending = false;
    }
  }
}
