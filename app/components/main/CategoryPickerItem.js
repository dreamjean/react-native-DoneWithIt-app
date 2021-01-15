import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { calender } from "../../config";
import Icon from "../Icon";
import Text from "../styles/Text";

const CategoryPickerItem = ({ item, onPress, selected }) => {
  return (
    <Container>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          alignItems: "center",
        })}
        {...{ onPress }}
      >
        <Wrapper {...{ selected }}>
          <Icon bgColor={item.backgroundColor} iconName={item.icon} />
        </Wrapper>
        <Label body1 center {...{ selected }}>
          {item.label}
        </Label>
      </Pressable>
    </Container>
  );
};

const Container = styled.View`
  width: ${calender.width / 3}px;
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m,
    marginTop: space.m,
  })}
`;

const Wrapper = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  border-width: 2px;

  ${({ selected, theme: { colors } }) => ({
    borderColor: selected ? colors.secondary : "transparent",
  })}
`;

const Label = styled(Text)`
  ${({ selected, theme: { colors, space } }) => ({
    color: selected ? colors.secondary : colors.medium,
    marginTop: space.s1,
  })}
`;

export default CategoryPickerItem;
