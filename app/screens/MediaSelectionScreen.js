import { Ionicons } from "@expo/vector-icons";
import { AssetsSelector } from "expo-images-picker";
import React from "react";
import styled from "styled-components";

import { theme } from "../config";

const { colors, getFont, size, radii } = theme;

const MediaSelectionScreen = ({ navigation }) => {
  const onDone = (data) => {
    console.log("our Picked assets data =>", data);
  };

  return (
    <Container>
      <AssetsSelector
        options={{
          assetsType: ["photo", "video"],
          maxSelections: 5,
          margin: 3,
          portraitCols: 4,
          landscapeCols: 5,
          widgetWidth: 98,
          widgetBgColor: colors.light,
          videoIcon: {
            Component: Ionicons,
            iconName: "play-circle",
            color: colors.white,
            size: 22,
          },
          selectedIcon: {
            Component: Ionicons,
            iconName: "checkmark-circle-sharp",
            color: colors.white,
            bg: colors.lightCyan1,
            size: 28,
          },
          defaultTopNavigator: {
            continueText: "Continue",
            goBackText: "Back",
            buttonStyle: {
              backgroundColor: colors.secondary,
              borderRadius: radii.m,
            },
            textStyle: {
              fontFamily: getFont(1),
              fontSize: size.s,
              color: colors.grey2,
            },
            backFunction: () => navigation.goBack(),
            doneFunction: (data) => onDone(data),
          },
          noAssets: {
            Component: () => <Container />,
          },
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default MediaSelectionScreen;
