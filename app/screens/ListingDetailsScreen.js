import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { ListItem } from "../components";
import { Image, Text } from "../components/styles";
import { colors, images } from "../config";

const ListingDetailsScreen = ({ navigation, route }) => {
  return (
    <Container>
      <Wrapper>
        <Image ditails source={{ uri: route?.params?.images[0].url }} />
        <Pressable
          style={({ pressed }) => ({
            position: "absolute",
            top: 26,
            left: 18,
            opacity: pressed ? 0.5 : 1,
          })}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={40}
            color={colors.grey}
          />
        </Pressable>
        <TextBox>
          <Text title1>{route?.params?.title}</Text>
          <Text body2 secondary marginTop={6}>
            ${route?.params?.price}
          </Text>
        </TextBox>
      </Wrapper>
      <ListItem image={images[0]} title="Rokia" subTitle="5 listings" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const TextBox = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.m,
  })}
`;

export default ListingDetailsScreen;
