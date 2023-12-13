import React from "react";
import { render, fireEvent, RenderAPI } from "@testing-library/react-native";
import { {{pascalCase name}}Screen, I{{pascalCase name}}ScreenProps } from "./{{pascalCase name}}Screen";

describe("Given a {{name}}Screen", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const make = (props: I{{pascalCase name}}ScreenProps): React.ReactElement => {
    return <{{name}}Screen {...props} />
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
