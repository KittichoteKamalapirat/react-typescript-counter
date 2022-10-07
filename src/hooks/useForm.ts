import React, { useState } from "react";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues); //title:'', body: ''

  return [
    values,
    (e: { target: HTMLInputElement; value: HTMLInputElement }) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
