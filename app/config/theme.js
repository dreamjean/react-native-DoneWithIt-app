import { Platform } from "react-native";

import calender from "./calender";
import colors from "./colors";

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ["Proxima-Nova-Bold", "Proxima-Nova-Sbold", "Proxima-Nova-Reg"],
  android: ["Montserrat-Bold", "Montserrat-SemiBold", "Montserrat-Regular"],
};

export default {
  colors,
  calender,
  size: {
    s: 12,
    button: 15,
    body1: 16,
    body2: 17,
    title1: 18,
    title2: 22,
  },
  space: {
    s1: 4,
    s2: 8,
    s3: 12,
    m: 15,
    m2: 20,
    l: 24,
    l2: 30,
    xl: 40,
    xxl: 80,
  },
  radii: {
    s: 4,
    m: 15,
    m2: 22,
    l: 25,
    xl: 32,
  },
  isIos,
  getFont,
};
