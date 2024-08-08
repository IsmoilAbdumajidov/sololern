import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const TextArea = ({ label,labelClass, name, ...rest }) => {
    return (
        <label htmlFor='name' className='capitalize block w-full'>
            <div className={`text-black ${labelClass}`}>{label || ""}</div>
            <Field as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </label>
    )
}

export default TextArea