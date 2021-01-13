import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Pressable } from "react-native";
import styled from "styled-components";

import { calender, colors } from "../config";
import PickerItem from "./PickerItem";
import Text from "./styles/Text";

const Picker = ({
  error,
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  touched,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dangerPrimery = error ? colors.danger : colors.secondary;
  const reColor = !touched ? colors.grey : dangerPrimery;

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Wrapper {...{ touched, error, width }}>
          {icon && (
            <MaterialCommunityIcons name={icon} color={reColor} size={26} />
          )}
          {selectedItem ? (
            <Category body1 color={colors.medium}>
              {selectedItem.label}
            </Category>
          ) : (
            <Category body1 color={!touched ? colors.grey : colors.danger}>
              {placeholder}
            </Category>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            color={reColor}
            size={26}
          />
        </Wrapper>
      </Pressable>
      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalBox>
          <Container>
            <Header>
              <Enpty />
              <Text body1 secondary>
                {placeholder || "placeholder"}
              </Text>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
                onPress={() => setModalVisible(false)}
              >
                <MaterialCommunityIcons
                  name="close-thick"
                  color={colors.secondary}
                  size={22}
                />
              </Pressable>
            </Header>
            <Listing
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                  selected={item === selectedItem}
                />
              )}
              numColumns={numberOfColumns}
            />
          </Container>
        </ModalBox>
      </Modal>
    </>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ width, touched, error, theme: { colors, radii, space } }) => ({
    backgroundColor: !touched
      ? colors.light
      : error
      ? colors.lightDanger
      : colors.lightCyan,
    borderRadius: radii.l,
    padding: space.m,
    marginVertical: space.s3,
    width,
  })}
`;

const Category = styled(Text)`
  flex: 1;

  ${({ color, theme: { space } }) => ({
    color,
    marginLeft: space.s3,
  })}
`;

const ModalBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.mediumLight,
  })}
`;

const Container = styled.View`
  height: ${calender.height / 2}px;
  width: 100%;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const Enpty = styled.View`
  width: 26px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.lightCyan,
    padding: space.s2,
  })}
`;

const Listing = styled.FlatList``;

export default Picker;
