import { StyleSheet } from "react-native";

import config from "config";

export const regular = StyleSheet.create({
  s: {
    fontSize: 14,
    lineHeight: 24,
    color: config.colors.text.primary,
    fontFamily: "RothornDC-Bold",
  },
  m: {
    fontSize: 16,
    lineHeight: 24,
    color: config.colors.text.primary,
    fontFamily: "RothornDC-Bold",
  },
  l: {
    fontSize: 21,
    lineHeight: 24,
    color: config.colors.text.primary,
    fontFamily: "RothornDC-Bold",
  },
});
