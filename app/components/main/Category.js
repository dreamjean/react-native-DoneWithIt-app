import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import Text from "../styles/Text";

const Category = ({ title, selected, onPress }) => {
  return (
    <Touchable {...{ selected, onPress }}>
      <Title body1 {...{ selected }}>
        {title}
      </Title>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  align-items: center;
  justify-content: center;

  ${({ selected, theme: { colors, space, radii } }) => ({
    backgroundColor: selected ? colors.primary : colors.lightCyan2,
    paddingVertical: space.s3,
    paddingHorizontal: space.m,
    marginRight: space.s2,
    marginVertical: space.s2,
    borderRadius: radii.m2,
  })}
`;

const Title = styled(Text)`
  ${({ selected, theme: { colors } }) => ({
    color: selected ? colors.white : colors.medium,
  })}
`;

export default Category;
