import { useFormikContext } from "formik";
import React from "react";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

const FormPicker = ({ name, ...rest }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        error={errors[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        touched={touched[name]}
        selectedItem={values[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormPicker;
