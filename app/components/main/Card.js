import React from "react";
import { Pressable } from "react-native";
import { Image } from "react-native-expo-image-cache";
import styled from "styled-components";

import { Text } from "../styles";

const Card = ({ image, title, subTitle, thumbnaiUrl, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      {...{ onPress }}
    >
      <Container>
        <Picture
          resizeMode="cover"
          tint="light"
          transitionDuration={300}
          uri={image}
          preview={{ uri: thumbnaiUrl }}
        />
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
    marginVertical: space.s2,
  })}
`;

const Picture = styled(Image)`
  width: 100%;
  height: 200px;
`;

const TextBox = styled.View`
  justify-content: center;

  ${({ theme: { space } }) => ({
    padding: space.m2,
  })}
`;

export default Card;
