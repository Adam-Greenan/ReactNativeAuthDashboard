import React, { ReactNode } from "react";

import { render } from "@testing-library/react-native";

import { Link, ILinkProps } from "./Link";

describe("Given a Link", () => {
  const make = (
    props: ILinkProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <Link {...props}>{children}</Link>;
  };

  describe("then rendering", () => {
    const tree = render(
      make({
        text: "",
      }),
    );

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
