import React, { useState } from "react";
import { Pressable } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";

import {
  ContactSellerForm,
  Icon,
  ListItem,
  PaginationDot,
} from "../components";
import { Text } from "../components/styles";
import { calender, colors, images, isIos } from "../config";

const { width } = calender;

const ListingDetailsScreen = ({ navigation, route }) => {
  const listing = route?.params;

  const [position, setPosition] = useState(0);

  const handleScroll = (e) => {
    const scrollX = e.nativeEvent.contentOffset.x;
    setPosition(Math.round(scrollX / width));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={60}
      enableOnAndroid
      enableAutoAutomaticScrol={isIos}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <Container showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Pictures>
            <ScrollView
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={handleScroll}
            >
              {listing.images.map((image, index) => (
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
              {listing.images.length > 1 &&
                listing.images.map((_, index) => (
                  <PaginationDot
                    key={index}
                    index={index}
                    position={position}
                  />
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
            <Icon iconName="close" size={36} bgColor={colors.grey} />
          </Pressable>
          <TitleBox>
            <Text title1>{listing.title}</Text>
            <Text body2 secondary marginTop={6}>
              ${listing.price}
            </Text>
          </TitleBox>
        </Wrapper>
        <DescriptionBox>
          <Text body1 opacity={0.75} secondary>
            Product Details
          </Text>
          {listing.description ? (
            <Description body1>{listing.description}</Description>
          ) : (
            <Description body1 opacity={0.65}>
              There is nothing here =_=
            </Description>
          )}
        </DescriptionBox>
        <ListItem image={images[0]} title="Rokia" subTitle="5 listings" />
        <ContactSellerForm listing={listing} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

const Container = styled.ScrollView`
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

const TitleBox = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.m,
  })}
`;

const DescriptionBox = styled.View`
  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.lightCyan,
    padding: space.m,
    marginVertical: space.s2,
  })}
`;

const Description = styled(Text)`
  line-height: 18px;

  ${({ theme: { colors, size, space } }) => ({
    fontSize: size.s,
    color: colors.medium,
    margin: space.s2,
    opacity: 0.65,
  })}
`;

export default ListingDetailsScreen;
