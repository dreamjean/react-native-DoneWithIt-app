import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CURVE_HEIGHT = width / 5;
const ACTION_WIDTH = 64;

export default {
  width,
  height,
  ACTION_WIDTH,
  CURVE_HEIGHT,
};
