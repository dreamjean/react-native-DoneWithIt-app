import Constants from "expo-constants";
import styled from "styled-components";

const SafeAreaView = styled.SafeAreaView`
  ${({ theme: { colors, isIos } }) => ({
    flex: 1,
    paddingTop: isIos ? 0 : Constants.statusBarHeight,
    backgroundColor: colors.white,
  })}
`;

export default SafeAreaView;
