import { DefaultTheme } from "@react-navigation/native";

import { colors } from "../config";

const navigationTheme = {
  ...DefaultTheme.colors,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

export default navigationTheme;
