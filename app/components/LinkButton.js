import React from "react";
import { Pressable } from "react-native";

import Text from "./styles/Text";

const LinkButton = ({ title, label, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      {...{ onPress }}
    >
      <Text body1 opacity={0.45}>
        {title} <Text secondary>{label}</Text>
      </Text>
    </Pressable>
  );
};

export default LinkButton;
