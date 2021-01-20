import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components";

import { SwipeableRow } from "../components";
import { View } from "../components/styles";
import { images } from "../config";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: images[0],
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: images[0],
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setReshing] = useState(false);

  const handleUpdate = (item) => {
    const newMessages = messages.filter((m) => m.id !== item.id);
    setMessages([item, ...newMessages]);
  };

  return (
    <Container>
      <Listing
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <SwipeableRow
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log(item)}
            onDelete={() =>
              setMessages(messages.filter((m) => m.id !== item.id))
            }
            onUpdate={() => handleUpdate(item)}
          />
        )}
        ItemSeparatorComponent={() => <View separator width="82%" />}
        refreshing={refreshing}
        onRefresh={() => {
          setReshing(true);
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: images[0],
            },
          ]);
          setReshing(false);
        }}
      />
      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Listing = styled.FlatList`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default MessagesScreen;
