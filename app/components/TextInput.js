import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";

import { colors } from "../config";

const TextInput = ({ touched, error, icon, ...rest }) => {
  const dangerPrimery = error ? colors.danger : colors.secondary;
  const reColor = !touched ? colors.grey : dangerPrimery;

  return (
    <Wrapper {...{ error, touched }}>
      {icon && <MaterialIcons name={icon} color={reColor} size={24} />}
      <Input
        {...rest}
        placeholderTextColor={reColor}
        selectionColor={error ? colors.danger : colors.secondary}
        underlineColorAndroid="transparent"
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;

  ${({ touched, error, theme: { colors, radii, space } }) => ({
    backgroundColor: !touched
      ? colors.light
      : error
      ? colors.lightDanger
      : colors.lightCyan,
    borderRadius: radii.l,
    padding: space.m,
    marginVertical: space.s2,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, getFont, space, size } }) => ({
    color: colors.medium,
    fontSize: size.body2,
    fontFamily: getFont(2),
    marginLeft: space.s,
  })}
`;

export default TextInput;
