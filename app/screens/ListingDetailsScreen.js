import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Image } from "react-native-expo-image-cache";
import styled from "styled-components";

import { ListItem, PaginationDot } from "../components";
import { Text } from "../components/styles";
import { calender, colors, images } from "../config";

const { width } = calender;

const ListingDetailsScreen = ({ navigation, route }) => {
  const [position, setPosition] = useState(0);

  const handleScroll = (e) => {
    const scrollX = e.nativeEvent.contentOffset.x;
    setPosition(Math.round(scrollX / width));
  };

  return (
    <Container>
      <Wrapper>
        <Pictures>
          <ScrollView
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
          >
            {route?.params?.images.map((image, index) => (
              <Picture
                resizeMode="cover"
                key={index}
                tint="light"
                transitionDuration={300}
                uri={image.url}
                preview={{ uri: image.thumbnaiUrl }}
              />
            ))}
          </ScrollView>
          <Dots>
            {route?.params?.images.length > 1 &&
              route?.params?.images.map((_, index) => (
                <PaginationDot key={index} index={index} position={position} />
              ))}
          </Dots>
        </Pictures>
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

const ScrollView = styled.ScrollView``;

const Pictures = styled.View`
  width: ${width}px;
  height: 350px;
`;

const Picture = styled(Image)`
  width: ${width}px;
  height: 350px;
`;

const Dots = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  align-self: center;
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
