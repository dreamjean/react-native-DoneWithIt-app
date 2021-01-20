import React from "react";
import * as Yup from "yup";

import { LinkButton } from "../components";
import { Form, FormField, SubmitButton } from "../components/forms";
import { Image, View } from "../components/styles";
import { images } from "../config";
import routes from "../navigation/routes";

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string().required().min(5).max(50).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  return (
    <View container>
      <Image logo source={images[2]} />
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (values.checked) navigation.navigate("Welcome");
          else return;
        }}
      >
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
    </View>
  );
};

export default RegisterScreen;
