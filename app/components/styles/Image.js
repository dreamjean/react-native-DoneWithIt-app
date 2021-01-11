import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const logoStyle = css`
  width: 100px;
  height: 100px;

  ${({ theme: { space } }) => ({
    resizeMode: "contain",
    marginTop: space.xxl,
    marginBottom: space.l,
  })}
`;

const cardStyle = css`
  width: 100%;
  height: 200px;
`;

const ditailsStyle = css`
  width: 100%;
  height: 300px;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ logo }) => logo && logoStyle}
  ${({ card }) => card && cardStyle}
  ${({ ditails }) => ditails && ditailsStyle}
`;

export default Image;
