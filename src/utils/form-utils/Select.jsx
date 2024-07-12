import React from 'react'
import TextError from './TextError'
import { ErrorMessage, FastField, Field } from 'formik'

const Select = ({ label, name, options, isRequired, ...rest }) => {
	return (
		<label htmlFor='name' className='capitalize block w-full'>
			<div className="text-black dark:text-white">{isRequired ? <p>{label} <span className='text-red-500'>*</span></p> : <p>{label}</p> || ""}</div>
			<Field as='select' name={name} {...rest}>
				{options?.map((option, index) => (
					<option key={index} value={option?.value} className='text-black'>
						{option?.key || ''}
					</option>
				))}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</label>
	)
}

export default Select
