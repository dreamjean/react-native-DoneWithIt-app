import React, { useRef } from "react";
import { Alert, I18nManager } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import styled from "styled-components";

import { calender, colors } from "../../config";
import ListItem from "./ListItem";
import RightAction from "./RightAction";

const { ACTION_WIDTH } = calender;

const SwipeableRow = ({ onDelete, onUpdate, ...rest }) => {
  const row = useRef();

  const handleRemove = () => {
    Alert.alert("Remove Item", "Are you share you want to remove this item?", [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => row.current.close(),
      },
      {
        text: "Yes",
        onPress: () => {
          onDelete();
        },
      },
    ]);
  };

  const renderRightActions = (progress) => {
    return (
      <Container>
        <RightAction
          icon="arrow-collapse-up"
          color={colors.secondary}
          onPress={() => {
            row.current.close();
            onUpdate();
          }}
          {...{ progress }}
        />
        <RightAction
          icon="trash-can-outline"
          color={colors.danger}
          onPress={handleRemove}
          {...{ progress }}
        />
      </Container>
    );
  };

  return (
    <Swipeable
      ref={row}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={32}
      renderRightActions={renderRightActions}
    >
      <ListItem {...rest} />
    </Swipeable>
  );
};

const Container = styled.View({
  width: ACTION_WIDTH * 2,
  flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
});

export default SwipeableRow;
