import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";

import { Card } from "../components";
import { SafeAreaView } from "../components/styles";
import { images } from "../config";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: images[4],
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: images[3],
  },
];

const ListingsScreen = () => {
  return (
    <Container>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />

      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m,
  })}
`;

const FlatList = styled.FlatList``;

export default ListingsScreen;
