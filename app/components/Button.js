import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "./styles";

const Button = ({ title, onPress, padding = 15, primary }) => {
  return (
    <Container {...{ onPress, padding, primary }}>
      <Text button>{title}</Text>
    </Container>
  );
};

const Container = styled(RectButton)`
  ${({ padding, primary, theme: { colors, radii } }) => ({
    backgroundColor: primary ? colors.primary : colors.secondary,
    borderRadius: radii.m,
    padding,
  })}
`;

export default Button;
