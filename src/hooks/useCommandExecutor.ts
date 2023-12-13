import { ICommandExecutor } from "commands/ICommandExecutor";

// commonly used pattern for executing commands
export const useCommandExecutor = (props: ICommandExecutor) => {
  const canExecute = props.command
    ? props.command.canExecute(props.commandParams) && !props.command.executing
    : true;

  const execute = () => {
    if (canExecute && props.command) {
      props.command.execute(props.commandParams);
    }
  };

  return { execute, canExecute };
};
