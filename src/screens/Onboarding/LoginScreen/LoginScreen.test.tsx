import React from "react";
import { render, fireEvent, RenderAPI } from "@testing-library/react-native";
import { LoginScreen, ILoginScreenProps } from "./LoginScreen";

describe("Given a LoginScreen", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const make = (props: ILoginScreenProps): React.ReactElement => {
    return <LoginScreen {...props} />
  }

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
