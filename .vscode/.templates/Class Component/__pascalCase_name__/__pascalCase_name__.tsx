import * as React from "react";

interface I{{ pascalCase name }}State {}
export interface I{{ pascalCase name }}Props {
  testID?: string;
}

export class {{ pascalCase name }} extends React.Component<I{{ pascalCase name }}Props, I{{ pascalCase name }}State> {
  constructor(props: I{{ pascalCase name }}Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return null;
  }
}
