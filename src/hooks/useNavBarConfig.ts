import { useEffect, useState } from "react";

import config from "config";
import { navbar } from "services/navbar";

export const useNavBarConfig = () => {
  const [headerLeft, setHeaderLeft] = useState<JSX.Element | null>(null);
  const [headerRight, setHeaderRight] = useState<JSX.Element | null>(null);
  const [headerTitle, setHeaderTitle] = useState<string>("");
  const [canGoBack, setCanGoBack] = useState<boolean>(true);
  const [color, setColor] = useState<string>(config.colors.primary);
  const [headerShown, setHeaderShown] = useState<boolean>(true);

  useEffect(() => {
    const currentConfig = navbar.register((newConfig) => {
      setHeaderLeft(newConfig.left ?? null);
      setHeaderRight(newConfig.right ?? null);
      setHeaderTitle(newConfig.title);
      setCanGoBack(newConfig.canGoBack);
      setColor(newConfig.color);
      setHeaderShown(newConfig.headerShown);
    });

    setHeaderLeft(currentConfig.left ?? null);
    setHeaderRight(currentConfig.right ?? null);
    setHeaderTitle(currentConfig.title);
    setCanGoBack(currentConfig.canGoBack);
    setColor(currentConfig.color);
    setHeaderShown(currentConfig.headerShown);

    return () => {
      navbar.unregister(currentConfig.id);
    };
  }, []);

  return {
    headerLeft,
    headerRight,
    headerTitle,
    canGoBack,
    color,
    headerShown,
  };
};
