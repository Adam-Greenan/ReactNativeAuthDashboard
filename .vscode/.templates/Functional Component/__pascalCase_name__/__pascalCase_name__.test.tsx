import React, { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { {{pascalCase name}}, I{{pascalCase name}}Props } from "./{{pascalCase name}}";

describe("Given a {{name}}", () => {
  const make = (
    props: I{{pascalCase name}}Props,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <{{pascalCase name}} {...props}>{children}</{{pascalCase name}}>;
  };

  describe("then rendering", () => {
    const tree = render(make({}));

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
