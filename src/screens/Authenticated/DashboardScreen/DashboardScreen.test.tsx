import React from "react";
import { render, fireEvent, RenderAPI } from "@testing-library/react-native";
import { DashboardScreen, IDashboardScreenProps } from "./DashboardScreen";

describe("Given a DashboardScreen", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const make = (props: IDashboardScreenProps): React.ReactElement => {
    return <DashboardScreen {...props} />
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
