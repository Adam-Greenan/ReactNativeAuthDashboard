import React, { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { TextInput, ITextInputProps } from "./TextInput";

describe("Given a TextInput", () => {
  const make = (
    props: ITextInputProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <TextInput {...props}>{children}</TextInput>;
  };

  describe("then rendering", () => {
    const tree = render(make({}));

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
