import { StyleSheet } from "react-native";
import config from "config";

export const regular = StyleSheet.create({
  s: {
    fontSize: 14,
    lineHeight: 24,
    color: config.colors.black,
  },
  m: {
    fontSize: 16,
    lineHeight: 24,
    color: config.colors.black,
  },
  l: {
    fontSize: 21,
    lineHeight: 24,
    color: config.colors.black,
  },
  xl: {
    fontSize: 26,
    lineHeight: 24,
    color: config.colors.black,
  },
});
