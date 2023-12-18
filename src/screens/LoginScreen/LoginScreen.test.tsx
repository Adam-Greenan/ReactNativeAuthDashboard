import React from "react";

import { render, RenderAPI } from "@testing-library/react-native";

import { ILoginScreenProps } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen.1";

describe("Given a LoginScreen", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const make = (props: ILoginScreenProps): React.ReactElement => {
    return <LoginScreen {...props} />;
  };

  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(make({}));
    //wait for animation to complete
    jest.advanceTimersByTime(200);
  });

  describe("then rendering", () => {
    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
