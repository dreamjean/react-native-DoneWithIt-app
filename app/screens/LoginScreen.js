import jwtDecode from "jwt-decode";
import React, { useContext, useState } from "react";
import * as Yup from "yup";

import authApi from "../api/auth";
import AuthContext from "../auth/context";
import { LinkButton } from "../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import { Image, View } from "../components/styles";
import { images } from "../config";
import routes from "../navigation/routes";

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string().required().min(5).max(50).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
  };

  return (
    <View container>
      <Image logo source={images[2]} />
      <Form
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
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
          icon="lock"
          keyboardAppearance="default"
          keyboardType="default"
          maxLength={50}
          name="password"
          numberOfLines={1}
          placeholder="Password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
      <LinkButton
        title="Don't have an account?"
        label="Register Here"
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </View>
  );
};

export default LoginScreen;
