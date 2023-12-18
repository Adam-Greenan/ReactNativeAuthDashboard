import React, { ReactNode } from "react";

import { render } from "@testing-library/react-native";

import { Checkbox, ICheckboxProps } from "./Checkbox";

describe("Given a Checkbox", () => {
  const make = (
    props: ICheckboxProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <Checkbox {...props}>{children}</Checkbox>;
  };

  describe("then rendering", () => {
    const tree = render(
      make({
        onChange: () => null,
        value: false,
      }),
    );

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
