import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const CheckboxGroup = ({ label, name, options, ...rest }) => {
    return (
        <label className='capitalize'>
            <span className="text-black dark:text-white">{label}</span>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map((option, index) => (
                        <label key={index} className="flex flex-row gap-2 items-center">
                            <input type="checkbox" {...field} value={option.value} checked={field.value.includes(option.value)} />
                            <span className="text-black dark:text-white">{option.key}</span>
                        </label>
                    ))
                }}
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </label>
    )
}

export default CheckboxGroup