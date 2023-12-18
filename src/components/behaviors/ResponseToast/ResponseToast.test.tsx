import React, { ReactNode } from "react";

import { render } from "@testing-library/react-native";

import { ResponseToast, IResponseToastProps } from "./ResponseToast";

describe("Given a ResponseToast", () => {
  const make = (
    props: IResponseToastProps,
    children: ReactNode | null = null,
  ): React.ReactElement => {
    return <ResponseToast {...props}>{children}</ResponseToast>;
  };

  describe("then rendering", () => {
    const tree = render(
      make({
        message: "",
        onClose: function (): void {
          throw new Error("Function not implemented.");
        },
        type: "SUCCESS",
        show: false,
      }),
    );

    it("should match snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
