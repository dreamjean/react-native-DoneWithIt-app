import React from "react";
import styled from "styled-components";

import { ListItem } from "../components";
import { SafeAreaView } from "../components/styles";
import { images } from "../config";

const messages = [
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

function MessageScreen() {
  return (
    <SafeAreaView>
      <Listing
        data={messages}
        keyExtra={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log(item)}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
}

const Listing = styled.FlatList`
  flex: 1;
`;

const Separator = styled.View`
  width: 78%;
  height: 1px;
  align-self: flex-end;
  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.light,
    marginHorizontal: space.s,
  })}
`;

export default MessageScreen;
