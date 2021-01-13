import styled, { css } from "styled-components";

const containerStyle = css`
  flex: 1;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    padding: space.m,
  })}
`;

const separatorStyle = css`
  height: 1px;
  align-self: flex-end;

  ${({ width, theme: { colors, space } }) => ({
    backgroundColor: colors.light,
    marginHorizontal: space.s,
    width,
  })}
`;

const View = styled.View`
  ${({ container }) => container && containerStyle}
  ${({ separator }) => separator && separatorStyle}
`;

export default View;
