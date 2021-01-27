import * as Notifications from "expo-notifications";
import React from "react";
import { Alert, Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import messagesApi from "../../api/messages";
import { Form, FormField, SubmitButton } from "../forms";

let validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller");
    }

    resetForm();

    Notifications.presentNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };

  return (
    <Container>
      <Form
        initialValues={{ message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          maxLength={255}
          multiline
          name="message"
          numberOfLine={3}
          placeholder="Message..."
        />
        <SubmitButton title="Contact Seller" />
      </Form>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    padding: space.m,
  })}
`;

export default ContactSellerForm;
