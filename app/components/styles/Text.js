import styled, { css } from "styled-components";

const titleStyle = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.title,
  })}
`;

const bodyStyle = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[2],
    fontSize: size.body,
  })}
`;

const buttonStyle = css`
  ${({ theme: { fonts, size, colors } }) => ({
    fontFamily: fonts[1],
    fontSize: size.button,
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  })}
`;

const Text = styled.Text`
  ${({
    center,
    right,
    marginTop,
    marginBottom,
    white,
    secondary,
    theme: { colors },
  }) => ({
    color: white ? colors.white : secondary ? colors.secondary : colors.dark,
    textAlign: center ? "center" : right ? "right" : "left",
    marginBottom,
    marginTop,
  })}

  ${({ title }) => title && titleStyle}
  ${({ body }) => body && bodyStyle}
  ${({ button }) => button && buttonStyle}
`;

export default Text;
