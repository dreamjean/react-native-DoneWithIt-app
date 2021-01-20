import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors } from "../config";

const NewButton = ({ onPress }) => {
  return (
    <Touchable {...{ onPress }}>
      <Box>
        <FontAwesome name="plus-circle" size={26} color={colors.white} />
      </Box>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  bottom: 18px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white2,
    borderRadius: radii.xl,
  })}
`;

const Box = styled.View`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.primary,
    borderRadius: radii.m2,
  })}
`;

export default NewButton;
