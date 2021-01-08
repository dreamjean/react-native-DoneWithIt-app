import React from "react";
import styled from "styled-components";

import { images } from "../config";

const WelcomeScreen = () => {
  return (
    <Container source={images[1]}>
      <Text>Welcome Screen</Text>
    </Container>
  );
};

const Container = styled.ImageBackground`
  flex: 1;
`;
const Text = styled.Text``;

export default WelcomeScreen;
