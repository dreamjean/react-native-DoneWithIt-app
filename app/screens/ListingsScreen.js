import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import listingsApi from "../api/listings";
import { Button, Card } from "../components";
import { Text, View } from "../components/styles";
import routes from "../navigation/routes";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadingListings();
  }, []);

  const loadingListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);

    setError(true);
    setListings(response.data);
  };

  return (
    <View container light>
      {error && (
        <>
          <Text body1 marginTop={10}>{`Couldn't retrieve the listings.`}</Text>
          <Button title="Retry" onPress={loadingListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing?.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            showsVerticalScrollIndicator={false}
          />
        )}
      />
      <StatusBar style="dark" />
    </View>
  );
};

const FlatList = styled.FlatList``;

export default ListingsScreen;
