import React, { ReactNode } from "react";

import { render } from "@testing-library/react-native";

import { LoginInput, ILoginInputProps } from "./LoginInput";

describe("Given a LoginInput", () => {
  const make = (
    props: ILoginInputProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <LoginInput {...props}>{children}</LoginInput>;
  };

  describe("then rendering", () => {
    const tree = render(
      make({
        onChange: () => null,
        value: undefined,
      }),
    );

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
