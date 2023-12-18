import React, { ReactNode } from "react";

import { render } from "@testing-library/react-native";

import { Button, IButtonProps } from "./Button";

describe("Given a Button", () => {
  const make = (
    props: IButtonProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <Button {...props}>{children}</Button>;
  };

  describe("then rendering", () => {
    const tree = render(make({ title: "Button Tittle", type: "primary" }));

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
