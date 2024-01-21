import React from 'react'
import { getErrors } from 'utils/helper'

const InputField = ({
  id,
  label,
  inputName,
  inputClassName = '',
  inputValue,
  formik = null,
  type = 'text',
  objKey = false,
  isError = false,
  disabled = false,
  labelClass = '',
  placeholder="",
  ...other
}) => {

  return (
    <div>
      <label
        htmlFor={id}
        className={labelClass}>
        {label}
      </label>

      <div className='relative group'>
        <input
          id={id}
          type={type}
          name={inputName}
          value={inputValue}
          disabled={disabled}
          placeholder={placeholder ?? `Enter ${label}`} 
          className={inputClassName}
          {...other}
        />
      </div>

      {isError && formik ? (
        <p className='text-sm text-red'>
          {getErrors({ formik, objKey, inputName })}
        </p>
      ) : null}
    </div>
  )
}

export default InputField
