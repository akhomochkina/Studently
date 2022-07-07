import React from "react";
import { useFormikContext } from "formik";
import RegistrationInutFields from "./RegistrationInputFields";
import ErrorMessages from "./ErrorMessages";

export default function RegistrationFormFields({ name, style, ...otherProps }) {
  //custom React hook that will return all Formik state and helpers via React Context
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <RegistrationInutFields
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        style={style}
        {...otherProps}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}
