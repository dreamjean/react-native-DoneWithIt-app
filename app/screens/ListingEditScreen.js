import React from "react";
import styled from "styled-components";

import { Avatar } from "../components";
import { Image, SafeAreaView, Text } from "../components/styles";
import { images } from "../config";

function ListingEditScreen() {
  return (
    <SafeAreaView>
      <Container>
        <Image ditails source={images[4]} />
        <TextBox>
          <Text title1>red jacket for sell</Text>
          <Text body2 secondary marginTop={6}>
            $100
          </Text>
        </TextBox>
        <Avatar avatar={images[0]} name="Rokia" subTitle="5 listings" />
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
`;

const TextBox = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.m,
  })}
`;

export default ListingEditScreen;
