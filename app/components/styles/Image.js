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

const mediaStyle = css`
  width: 100px;
  height: 100px;
`;

const ditailsStyle = css`
  width: 100%;
  height: 300px;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ avatar2 }) => avatar2 && avatar2Style}
  ${({ logo }) => logo && logoStyle}
  ${({ card }) => card && cardStyle}
  ${({ ditails }) => ditails && ditailsStyle}
  ${({ media }) => media && mediaStyle}
`;

export default Image;
