import React from "react";
import { useForm } from "../hooks/useForm";

export const Form = () => {
  const [inputs, handleChange] = useForm({ title: "", body: "" });

  //   handleChange =  setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  return (
    <>
      <input
        name="title"
        value={inputs.title}
        // onChange={(e) => handleChange(e)} //works
        onChange={handleChange} //also works
        type="text"
      />

      <input name="name" value={inputs.name} onChange={handleChange} />
      <input
        name="body"
        value={inputs.body}
        onChange={handleChange} //also works
        type="text"
      />
    </>
  );
};
