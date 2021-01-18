import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";

import { colors } from "../config";

const TextInput = ({ touched, error, icon, width = "100%", ...rest }) => {
  const dangerPrimery = error ? colors.danger : colors.secondary;
  const reColor = !touched ? colors.grey : dangerPrimery;

  return (
    <Wrapper {...{ error, touched, width }}>
      {icon && <MaterialIcons name={icon} color={reColor} size={24} />}
      <Input
        {...rest}
        placeholderTextColor={colors.grey}
        selectionColor={error ? colors.danger : colors.secondary}
        underlineColorAndroid="transparent"
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;

  ${({ width, touched, error, theme: { colors, radii, space } }) => ({
    backgroundColor: !touched
      ? colors.light
      : error
      ? colors.lightDanger
      : colors.lightCyan,
    borderRadius: radii.l,
    paddingVertical: space.s3,
    paddingHorizontal: space.m,
    marginVertical: space.s3,
    width,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, getFont, space, size } }) => ({
    color: colors.medium,
    fontSize: size.body2,
    fontFamily: getFont(2),
    marginLeft: space.s2,
  })}
`;

export default TextInput;
