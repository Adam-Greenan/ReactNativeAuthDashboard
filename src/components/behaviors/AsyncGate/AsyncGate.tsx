import * as React from "react";
import { useEffect } from "react";

export interface IAsyncGateProps {
  children?: any;
  action: () => void;
  onError?: () => void;
}
export const AsyncGate: React.FunctionComponent<IAsyncGateProps> = (props) => {
  const [resolved, setResolved] = React.useState(false);

  useEffect(() => {
    const resolve = async () => {
      try {
        await props.action();
      } catch (err) {
        if (props.onError) {
          props.onError();
        }
      }
      setResolved(true);
    };
    resolve();
  }, []);

  if (resolved) {
    return props.children as any;
  } else {
    return null;
  }
};
