import React from "react";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

import { colors } from "../../config";

const PaginationDot = ({ index, position }) => {
  const opacity = interpolate(position, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.35, 1, 0.35],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(position, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        opacity,
        height: 8,
        width: 8,
        borderRadius: 4,
        margin: 6,
        backgroundColor: colors.secondary,
        transform: [{ scale }],
      }}
    />
  );
};

export default PaginationDot;
