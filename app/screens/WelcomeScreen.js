import React from "react";
import styled from "styled-components";

import { Button } from "../components";
import { Image, Text } from "../components/styles";
import { images } from "../config";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container blurRadius={5} source={images[1]}>
      <Image logo source={images[2]} />
      <Text title2>{`Sell What You Don't Need`}</Text>
      <Wrapper>
        <Button
          margin={10}
          primary
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          margin={10}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.ImageBackground({
  flex: 1,
  resizeMode: "cover",
  alignItems: "center",
});

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m,
  })}
`;

export default WelcomeScreen;
