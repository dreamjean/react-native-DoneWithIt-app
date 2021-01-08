import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CURVE_HEIGHT = width / 5;

export default {
  width,
  height,
  CURVE_HEIGHT,
};
