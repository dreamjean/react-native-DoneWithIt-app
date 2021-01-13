import React from "react";
import styled from "styled-components";

import Text from "../styles/Text";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return (
    <Container>
      <Text danger>{error}</Text>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
`;

export default ErrorMessage;
