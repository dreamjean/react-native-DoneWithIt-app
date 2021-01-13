import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";

import { Icon, ListItem } from "../components";
import { Image, View } from "../components/styles";
import { colors, images } from "../config";

const menuItems = [
  {
    title: "My Listings",
    icon: "format-list-bulleted",
    backgroundColor: colors.primary,
    screen: "Listing",
  },
  {
    title: "My Messages",
    icon: "email",
    backgroundColor: colors.secondary,
    screen: "Message",
  },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <ListItem
          IconComponent={<Image avatar2 source={images[0]} />}
          title="Rokia"
          subTitle="rokia@demo.com"
        />
      </Header>
      <Wrapper>
        <Listing
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon iconName={item.icon} bgColor={item.backgroundColor} />
              }
              title={item.title}
              onPress={() => navigation.navigate(item.screen, item)}
            />
          )}
          ItemSeparatorComponent={() => <View separator width="82%" />}
        />
      </Wrapper>
      <ListItem
        IconComponent={<Icon iconName="logout" bgColor={colors.yellow} />}
        title="Log Out"
      />
      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.light,
  })}
`;

const Header = styled.View`
  height: 110px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    paddingTop: space.l2,
    paddingBottom: space.m,
  })}
`;

const Wrapper = styled.View`
  ${({ theme: { space } }) => ({
    marginVertical: space.m,
  })}
`;

const Listing = styled.FlatList`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default ProfileScreen;
