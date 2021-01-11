import React from "react";
import styled from "styled-components";

import { Image, Text } from "../styles";

const Card = ({ image, title, subTitle }) => {
  return (
    <Container>
      <Image card source={image} />
      <TextBox>
        <Text body2>{title}</Text>
        <Text title1 secondary marginTop={6}>
          ${subTitle}
        </Text>
      </TextBox>
    </Container>
  );
};

const Container = styled.View`
  overflow: hidden;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m,
    marginBottom: space.m2,
  })}
`;

const TextBox = styled.View`
  justify-content: center;

  ${({ theme: { space } }) => ({
    padding: space.m2,
  })}
`;

export default Card;
