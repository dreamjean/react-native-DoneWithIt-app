import { StyleSheet } from "react-native";
import styled, { css } from "styled-components";

const containerStyle = css`
  flex: 1;

  ${({ light, theme: { colors, space } }) => ({
    backgroundColor: light ? colors.light : colors.white,
    padding: space.m,
    paddingBottom: 0,
  })}
`;

const separatorStyle = css`
  height: ${StyleSheet.hairlineWidth}px;
  align-self: flex-end;

  ${({ width, theme: { colors, space } }) => ({
    backgroundColor: colors.grey,
    marginHorizontal: space.s,
    width,
    opacity: 0.35,
  })}
`;

const View = styled.View`
  ${({ container }) => container && containerStyle}
  ${({ separator }) => separator && separatorStyle}
`;

export default View;
