export interface NavBarConfig {
  left?: JSX.Element | null;
  right?: JSX.Element | null;
  title: string;
  canGoBack: boolean;
  color: string;
  headerShown: boolean;
}

export interface NavBarIdConfig extends NavBarConfig {
  id: string;
}
