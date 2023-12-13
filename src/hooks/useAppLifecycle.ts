import { AppState, AppStateStatus } from "react-native";
import { useState, useEffect } from "react";
import { useCommand } from "hooks/useCommand";
import { LaunchCommand } from "commands/lifecycle/LaunchCommand";
import { ResumeCommand } from "commands/lifecycle/ResumeCommand";
import { SuspendCommand } from "commands/lifecycle/SuspendCommand";

export const useAppLifecycle = (hasLaunched: boolean = false) => {
  const [launched, setLaunched] = useState(hasLaunched);
  const [appState, setAppState] = useState(AppState.currentState);
  const launchCommand = useCommand(() => new LaunchCommand());
  const resumeCommand = useCommand(() => new ResumeCommand());
  const suspendCommand = useCommand(() => new SuspendCommand());

  useEffect(() => {
    async function onAppStateChange(newState: AppStateStatus) {
      if (newState === "active" && appState.match(/inactive|background/)) {
        const cmd = resumeCommand;
        if (cmd.canExecute()) {
          await cmd.execute();
        }
      } else if (newState === "background") {
        const cmd = suspendCommand;
        if (cmd.canExecute()) {
          await cmd.execute();
        }
      }

      setAppState(newState);
    }

    async function launch() {
      if (!launched) {
        setLaunched(true);
        const cmd = launchCommand;
        if (cmd.canExecute()) {
          await cmd.execute();
        }
      }
    }

    launch();

    const event = AppState.addEventListener("change", onAppStateChange);
    return () => {
      event.remove();
    };
  }, [appState, launched]);
};
