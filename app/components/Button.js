import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "./styles";

const Button = ({ title, onPress, margin, padding = 15, primary }) => {
  return (
    <Container {...{ onPress, margin, padding, primary }}>
      <Text button>{title}</Text>
    </Container>
  );
};

const Container = styled(RectButton)`
  width: 100%;
  ${({ padding, margin, primary, theme: { colors, radii } }) => ({
    backgroundColor: primary ? colors.primary : colors.secondary,
    borderRadius: radii.l,
    padding,
    margin,
  })}
`;

export default Button;
