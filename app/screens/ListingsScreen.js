import React from "react";
import styled from "styled-components";

import { Card } from "../components";
import { SafeAreaView } from "../components/styles";
import { images } from "../config";

function ListingsScreen() {
  return (
    <SafeAreaView>
      <Container>
        <Card image={images[3]} title="red jacket" subTitle="100" />
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    padding: space.m,
  })}
`;

export default ListingsScreen;
