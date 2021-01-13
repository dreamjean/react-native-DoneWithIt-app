import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import { Image, Text } from "../styles";

const ListItem = ({ IconComponent, image, title, subTitle, onPress }) => {
  return (
    <Pressable
      {...{ onPress }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        background: pressed ? colors.lightCyan : "transparent",
      })}
    >
      <Wrapper>
        {IconComponent}
        {image && <Image avatar source={image} />}

        <TextBox>
          <Text body2>{title}</Text>
          {subTitle && (
            <Text body1 opacity={0.35} marginTop={4} numberOfLines={1}>
              {subTitle}
            </Text>
          )}
        </TextBox>
      </Wrapper>
    </Pressable>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    paddingVertical: space.s2,
    paddingLeft: space.m,
  })}
`;

const TextBox = styled.View`
  justify-content: center;

  ${({ theme: { space } }) => ({
    marginLeft: space.s2,
  })}
`;

export default ListItem;
