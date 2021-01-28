import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";

import authApi from "../api/auth";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import { ActivityIndicator, LinkButton } from "../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import { Image, View } from "../components/styles";
import { images, isIos } from "../config";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";
import logger from "../utility/logger";

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string().required().min(5).max(50).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        logger.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutoAutomaticScrol={isIos}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View container>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
        <Image logo source={images[2]} />
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="username"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="account-circle"
            keyboardAppearance="default"
            keyboardType="default"
            name="name"
            numberOfLines={1}
            placeholder="Username"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="username"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="email"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            numberOfLines={1}
            placeholder="Email address"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="emailAddress"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="password"
            numberOfLines={1}
            placeholder="Password"
            returnKeyLabel="go"
            returnKeyType="go"
            textContentType="password"
          />
          <SubmitButton title="Get Started" />
        </Form>
        <LinkButton
          title="Already hanve an account?"
          label="Login Here"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <StatusBar style="dark" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
