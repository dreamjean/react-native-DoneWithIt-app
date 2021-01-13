import Constants from "expo-constants";
import styled from "styled-components";

const SafeAreaView = styled.SafeAreaView`
  ${({ theme: { colors } }) => ({
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.light,
  })}
`;

export default SafeAreaView;
