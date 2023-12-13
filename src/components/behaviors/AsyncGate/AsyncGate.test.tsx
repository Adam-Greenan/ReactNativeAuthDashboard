import React, { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { AsyncGate, IAsyncGateProps } from "./AsyncGate";

describe("Given a AsyncGate", () => {
  const make = (
    props: IAsyncGateProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <AsyncGate {...props}>{children}</AsyncGate>;
  };

  describe("then rendering", () => {
    // const tree = render(make({}));

    xit("should match snapshot", () => {});
  });
});
