import styled, { css } from "styled-components";

const title1Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[1],
    fontSize: size.title1,
  })}
`;

const title2Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[1],
    fontSize: size.title2,
  })}
`;

const body1Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[2],
    fontSize: size.body1,
  })}
`;

const body2Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[2],
    fontSize: size.body2,
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
    opacity,
    theme: { colors },
  }) => ({
    color: white ? colors.white : secondary ? colors.secondary : colors.dark,
    textAlign: center ? "center" : right ? "right" : "left",
    marginBottom,
    marginTop,
    opacity,
  })}

  ${({ title1 }) => title1 && title1Style}
  ${({ title2 }) => title2 && title2Style}
  ${({ body1 }) => body1 && body1Style}
  ${({ body2 }) => body2 && body2Style}
  ${({ button }) => button && buttonStyle}
`;

export default Text;
