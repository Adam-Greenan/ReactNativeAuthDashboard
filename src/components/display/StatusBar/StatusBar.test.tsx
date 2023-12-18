import React from "react";

import { render } from "@testing-library/react-native";

import { StatusBar, IStatusBarProps } from "./StatusBar";

describe("Given a StatusBar", () => {
  const make = (props: IStatusBarProps): React.ReactElement => {
    return <StatusBar {...props} />;
  };

  const modes: Array<"content" | "header"> = ["content", "header"];

  for (const mode of modes) {
    describe(`where mode is ${mode}`, () => {
      describe("then rendering", () => {
        const tree = render(
          make({
            mode,
          }),
        ).toJSON();

        it("should match snapshot", () => {
          expect(tree).toMatchSnapshot();
        });
      });
    });
  }
});
