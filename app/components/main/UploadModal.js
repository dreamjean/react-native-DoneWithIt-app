import LottieView from "lottie-react-native";
import React from "react";
import * as Progress from "react-native-progress";
import styled from "styled-components";

import { colors } from "../../config";

const UploadModal = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal {...{ visible }}>
      <Container>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../../assets/animations/done.json")}
            style={{ width: 150 }}
          />
        )}
      </Container>
    </Modal>
  );
};

const Modal = styled.Modal``;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default UploadModal;
