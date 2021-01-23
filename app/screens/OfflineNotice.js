import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import styled from "styled-components";

import { Text } from "../components/styles";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <Container>
        <Text body1 white>
          No Internet Connection
        </Text>
      </Container>
    );

  return null;
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 1;
  top: 30px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.primary,
  })}
`;

export default OfflineNotice;
