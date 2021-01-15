import { Octicons } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors } from "../config";

const NewButton = ({ onPress }) => {
  return (
    <Touchable {...{ onPress }}>
      <Box>
        <Octicons name="plus" size={26} color={colors.light} />
      </Box>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  bottom: 28px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.light,
    borderRadius: radii.xl,
  })}
`;

const Box = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.primary,
    borderRadius: radii.l,
  })}
`;

export default NewButton;
