import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  //   console.log(values);
  //   console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  //console.log(formik)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="text"
            value={values.age}
            onChange={handleChange}
            id="age"
            className={errors.age ? "input-error" : ""}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label>sifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Kaydet
        </button>
      </form>
    </>
  );
}

export default GeneralForm;
