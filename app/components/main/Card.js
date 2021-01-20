import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { Image, Text } from "../styles";

const Card = ({ image, title, subTitle, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      {...{ onPress }}
    >
      <Container>
        <Image card source={{ uri: image }} />
        <TextBox>
          <Text body2 numberOfLnes={1}>
            {title}
          </Text>
          <Text title1 secondary marginTop={6} numberOfLnes={2}>
            {subTitle}
          </Text>
        </TextBox>
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  overflow: hidden;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m,
    marginTop: space.m,
  })}
`;

const TextBox = styled.View`
  justify-content: center;

  ${({ theme: { space } }) => ({
    padding: space.m2,
  })}
`;

export default Card;
