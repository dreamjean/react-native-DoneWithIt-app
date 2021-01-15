import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors } from "../config";
import Image from "./styles/Image";

const ImageInput = ({ error, imageUri, onPress }) => {
  return (
    <Container {...{ error }}>
      {imageUri && <Image media source={{ uri: imageUri }} />}
      {!imageUri && (
        <Touchable {...{ error, onPress }}>
          <MaterialCommunityIcons
            name="camera-plus"
            size={34}
            color={colors.grey}
          />
        </Touchable>
      )}
    </Container>
  );
};

const Container = styled.View`
  width: 100px;
  height: 100px;
  overflow: hidden;

  ${({ error, theme: { colors, space, radii } }) => ({
    borderRadius: radii.m,
    background: error ? colors.lightDdanger : colors.light,
    marginVertical: space.s3,
  })}
`;

const Touchable = styled(RectButton)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m,
  })}
`;

export default ImageInput;
