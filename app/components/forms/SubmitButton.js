import { useFormikContext } from "formik";
import React from "react";

import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} margin={20} primary onPress={handleSubmit} />;
};

export default SubmitButton;
