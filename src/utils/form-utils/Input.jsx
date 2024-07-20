import { ErrorMessage, Field } from "formik"
import React from "react"
import TextError from "./TextError"

const Input = ({ label, name, labelClass, isRequired, ...rest }) => {
  return (
    <label htmlFor={name} className="capitalize block w-full'">
      <div className={`text-black ${labelClass}`}>{isRequired ? <p>{label} <span className='text-red-500'>*</span></p> : <p>{label}</p> || ""}</div>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </label>
  )
}

export default Input
