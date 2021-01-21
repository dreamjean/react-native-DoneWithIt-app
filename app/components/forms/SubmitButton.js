import { useFormikContext } from "formik";
import React from "react";

import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { submitForm } = useFormikContext();

  return (
    <Button title={title} marginVertical={15} primary onPress={submitForm} />
  );
};

export default SubmitButton;
