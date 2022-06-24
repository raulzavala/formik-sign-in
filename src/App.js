import React from "react";
import { useFormik } from "formik";
//Code Formik, Raul Antonio Zavala Lopez

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
      setSubmitting(false);
    },
    validate: (values) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      let errors = {};
      if (!values.emailField) {
        errors.email = "Field required";
      } else {
        if (!regex.test(values.emailField))
          errors.email = "Username should be an email";
      }
      if (!values.pswField) errors.password = "Field required";

      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input
          id="emailField"
          name="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }} id="emailError">
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password:</div>
        <input
          id="pswField"
          name="pswField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }} id="pswError">
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
