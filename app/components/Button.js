import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "./styles";

const Button = ({ title, onPress, marginVertical, padding = 15, primary }) => {
  return (
    <Container {...{ onPress, marginVertical, padding, primary }}>
      <Text button>{title}</Text>
    </Container>
  );
};

const Container = styled(RectButton)`
  width: 100%;
  ${({ padding, marginVertical, primary, theme: { colors, radii } }) => ({
    backgroundColor: primary ? colors.primary : colors.secondary,
    borderRadius: radii.l,
    padding,
    marginVertical,
  })}
`;

export default Button;
