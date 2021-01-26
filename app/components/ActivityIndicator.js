import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <Container style={StyleSheet.absoluteFill}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loading.json")}
      />
    </Container>
  );
};

const Container = styled.View`
  z-index: 1;
  opacity: 0.7;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default ActivityIndicator;
