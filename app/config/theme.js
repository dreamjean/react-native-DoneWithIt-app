import { Platform } from "react-native";

import calender from "./calender";
import colors from "./colors";

export const isIos = Platform.OS === "ios";

export default {
  colors,
  calender,
  fonts: ["Gotham-Black", "Gotham-Bold", "Gotham-Medium"],
  size: {
    button: 15,
    body1: 16,
    body2: 17,
    title1: 18,
    title2: 22,
  },
  space: {
    s: 8,
    s2: 12,
    m: 15,
    m2: 20,
    l: 24,
    xl: 40,
    xxl: 80,
  },
  radii: {
    s: 4,
    m: 15,
    l: 25,
  },
  isIos,
};
