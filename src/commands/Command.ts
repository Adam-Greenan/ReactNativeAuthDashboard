import { observable, computed, action, makeObservable } from "mobx";

import { ICommand } from "./ICommand";

export abstract class Command<Param = any> implements ICommand<Param> {
  private isExecuting: boolean = false;

  constructor() {
    makeObservable<Command, "isExecuting">(this, {
      isExecuting: observable,
      executing: computed,
      execute: action,
    });
  }

  get executing(): boolean {
    return this.isExecuting;
  }

  public async execute(params?: Param): Promise<void> {
    if (this.canExecute(params) && !this.isExecuting) {
      this.isExecuting = true;
      try {
        await this.onExecute(params);
      } finally {
        this.isExecuting = false;
      }
    }
  }

  protected abstract onExecute(params?: Param): Promise<void>;

  public canExecute(_params?: Param): boolean {
    return true;
  }
}
