import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const avatar2Style = css`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const logoStyle = css`
  width: 100px;
  height: 100px;
  align-self: center;

  ${({ height, theme: { space } }) => ({
    resizeMode: "contain",
    marginTop: height ? space.xxl : space.l2,
    marginBottom: space.l,
  })}
`;

const mediaStyle = css`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ avatar2 }) => avatar2 && avatar2Style}
  ${({ logo }) => logo && logoStyle}
  ${({ media }) => media && mediaStyle}
`;

export default Image;
