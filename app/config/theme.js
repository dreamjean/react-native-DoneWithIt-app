import { Platform } from "react-native";

import calender from "./calender";
import colors from "./colors";

export const isIos = Platform.OS === "ios";

export default {
  colors,
  calender,
  fonts: ["Gotham-Black", "Gotham-Bold", "Gotham-Medium"],
  size: {
    body: 16,
    button: 15,
    title: 20,
  },
  space: {
    s: 8,
    s2: 12,
    m: 15,
    l: 24,
    xl: 40,
  },
  radii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  isIos,
};
