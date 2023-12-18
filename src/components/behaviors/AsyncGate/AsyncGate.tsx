import { FC, useState, useEffect } from "react";

export interface IAsyncGateProps {
  children?: any;
  action?: () => void;
  onError?: () => void;
}
export const AsyncGate: FC<IAsyncGateProps> = (props) => {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const resolve = async () => {
      try {
        console.log("error");
        if (props.action) {
          await props.action();
        }
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
