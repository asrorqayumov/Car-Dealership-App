import React from 'react'

export const FormGroup = ({name,label,inputHandler,value}) => {
  return (
    <div className="form_group modal_form">
    <label className="login_label" htmlFor={label}>
      {label}
    </label>
    <input
      className="input"
      type="text"
      name={name}
      id={label}
      placeholder="Kiriting"
      onChange={inputHandler}
      defaultValue={value}
      // required
    />
  </div>
  )
}
