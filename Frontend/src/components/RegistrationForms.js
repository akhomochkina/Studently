import React from "react";
import { Formik } from 'formik';

export default function RegistrationForms({ initialValues, onSubmit, validationSchema, children }) {
    return(
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {() => <>{children}</>}        
        </Formik>
    )
}