import { useState, useEffect } from "react";

import { AppState, AppStateStatus } from "react-native";

import { LaunchCommand } from "commands/lifecycle/LaunchCommand";
import { ResumeCommand } from "commands/lifecycle/ResumeCommand";
import { SuspendCommand } from "commands/lifecycle/SuspendCommand";
import { useCommand } from "hooks/useCommand";

export const useAppLifecycle = (hasLaunched: boolean = false) => {
  const [launched, setLaunched] = useState(hasLaunched);
  const [appState, setAppState] = useState(AppState.currentState);
  const launchCommand = useCommand(() => new LaunchCommand());
  const resumeCommand = useCommand(() => new ResumeCommand());
  const suspendCommand = useCommand(() => new SuspendCommand());

  console.log("appState");

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
      Promise.resolve(true);
    }

    async function launch() {
      if (!launched) {
        setLaunched(true);
        const cmd = launchCommand;
        if (cmd.canExecute()) {
          await cmd.execute();
        }
      }
      Promise.resolve(true);
    }

    launch();

    const event = AppState.addEventListener("change", onAppStateChange);
    return () => {
      event.remove();
    };
  }, [appState, launched]);
};
