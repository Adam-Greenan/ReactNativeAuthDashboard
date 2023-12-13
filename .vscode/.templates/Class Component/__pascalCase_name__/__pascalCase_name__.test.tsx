import React from "react";
import { render } from "@testing-library/react-native";
import { {{pascalCase name}}, I{{pascalCase name}}Props } from "./{{pascalCase name}}";

describe("Given a {{pascalCase name}}", () => {
  const make = (props: I{{pascalCase name}}Props): React.ReactElement => {
    return <{{pascalCase name}} {...props} />;
  };

  describe("then rendering", () => {
    const tree = render(make({})).toJSON();

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
