import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import styled from "styled-components";

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import { Icon, ListItem } from "../components";
import { Image, View } from "../components/styles";
import { colors, images } from "../config";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "MyListings",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const ProfileScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Container>
      <Header>
        <ListItem
          IconComponent={<Image avatar2 source={images[0]} />}
          title={user.name}
          subTitle={user.email}
        />
      </Header>
      <Wrapper>
        <Listing
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  iconName={item.icon.name}
                  bgColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen, item)}
            />
          )}
          ItemSeparatorComponent={() => <View separator width="85%" />}
        />
      </Wrapper>
      <ListItem
        IconComponent={<Icon iconName="logout" bgColor={colors.yellow} />}
        title="Log Out"
        onPress={handleLogOut}
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
