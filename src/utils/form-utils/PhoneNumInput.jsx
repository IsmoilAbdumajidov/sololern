import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'
import Input from 'react-phone-number-input/input'

const PhoneNumInput = ({ label, name,labelClass, isRequired, ...rest }) => {
    return (
        <label htmlFor={name} className='capitalize block w-full'>
            <div className={`text-black ${labelClass}`}>{isRequired ? <p>{label} <span className='text-red-500'>*</span></p> : <p>{label}</p> || ""}</div>
            <Field name={name}>
                {({ field, form: { setFieldValue } }) => {
                    const { value } = field
                    return <Input name={name} {...rest} {...field} onChange={e => setFieldValue(name, e)} />
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </label>
    )
}

export default PhoneNumInput