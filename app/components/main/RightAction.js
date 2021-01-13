import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { calender, colors } from "../../config";

const { ACTION_WIDTH } = calender;

const RightAction = ({ icon, color, onPress, progress }) => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [ACTION_WIDTH, 0],
  });

  const opacity = progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  });

  return (
    <Animated.View
      style={{ flex: 1, opacity, transform: [{ translateX: trans }] }}
    >
      <Container {...{ color, onPress }}>
        <MaterialCommunityIcons name={icon} size={24} color={colors.white} />
      </Container>
    </Animated.View>
  );
};

const Container = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  ${({ color }) => ({
    backgroundColor: color,
  })};
`;

export default RightAction;
