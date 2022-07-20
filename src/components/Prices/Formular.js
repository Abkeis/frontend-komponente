import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Formular = ({ data }) => {
  const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup.number().required().positive().integer(),
    website: yup.string().url(),
  });
  return function App() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(SignupSchema),
    });
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>{data.name}</label>
          <input {...register("Name*")} />
          {errors.data.name && <p>{errors.data.name.message}</p>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{data.email}</label>
          <input {...register("Email*")} />
          {errors.data.email && <p>{errors.data.email.message}</p>}
        </div>
        <div>
          <label>{data.experience_label}</label>
          <input {...register("Experience")} />
          {errors.data.experience_label && (
            <p>{errors.data.experience_label.message}</p>
          )}
        </div>
        <div>
          <label>{data.date}</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.data.date && <p>{errors.data.date.message}</p>}
        </div>
        <input type="submit" />
      </form>
    );
  };
  // const rootElement = document.getElementById("root");
  // ReactDOM.render(<App />, rootElement);
};
