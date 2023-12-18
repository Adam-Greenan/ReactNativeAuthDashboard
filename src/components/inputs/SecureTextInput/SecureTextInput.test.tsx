import React, { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { SecureTextInput, ISecureTextInputProps } from "./SecureTextInput";

describe("Given a SecureTextInput", () => {
  const make = (
    props: ISecureTextInputProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <SecureTextInput {...props}>{children}</SecureTextInput>;
  };

  describe("then rendering", () => {
    const tree = render(make({}));

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
