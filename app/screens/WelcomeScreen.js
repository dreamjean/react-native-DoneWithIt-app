import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";

import { Button } from "../components";
import { Image, Text } from "../components/styles";
import { images } from "../config";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container blurRadius={5} source={images[1]}>
      <Image logo height source={images[2]} />
      <Text title2>{`Sell What You Don't Need`}</Text>
      <Wrapper>
        <Button
          primary
          title="Login"
          marginVertical={5}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          marginVertical={10}
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </Wrapper>
      <StatusBar style="dark" />
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
