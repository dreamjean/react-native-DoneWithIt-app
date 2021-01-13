import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import Text from "./styles/Text";

const PickerItem = ({ label, onPress, selected }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
      {...{ onPress }}
    >
      <Label body1 {...{ selected }}>
        {label}
      </Label>
    </Pressable>
  );
};

const Label = styled(Text)`
  ${({ selected, theme: { colors, space } }) => ({
    marginVertical: space.m,
    textAlign: "center",
    color: selected ? colors.dark : colors.medium,
  })}
`;

export default PickerItem;
