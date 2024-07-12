import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Checkbox = ({ label, name, ...rest }) => {
	return (
		<div>
			<Field name={name} id={name}>
				{({ field, form: { setFieldValue } }) => {
					const { value } = field;
					return (
						<label
							htmlFor={name}
							className='capitalize inline-flex items-center gap-3 cursor-pointer'
						>
							<span className="text-black dark:text-white">{label || ''}</span>
							<input
								{...rest}
								type='checkbox'
								{...field}
								className='sr-only peer'
								name={name}
								value={value}
								onChange={e => {
									setFieldValue(name, e.target.checked);
								}}
								checked={value}
								id={name}
							/>
							<div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						</label>
					);
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
			{/* <label className='inline-flex items-center cursor-pointer'>
				<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
			</label> */}
		</div>
	);
};

export default Checkbox;
