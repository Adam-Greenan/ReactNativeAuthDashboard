import React from "react";
import { render } from "@testing-library/react-native";
import { Background, IBackgroundProps } from "./Background";

describe("Given a Background", () => {
  const make = (props: IBackgroundProps): React.ReactElement => {
    return <Background {...props} />;
  };

  describe("then rendering", () => {
    const tree = render(make({})).toJSON();

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
