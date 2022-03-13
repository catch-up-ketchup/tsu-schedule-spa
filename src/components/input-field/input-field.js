import React, { useEffect } from 'react';
import { isEqual } from "lodash/lang";

import './input-field.scss';


const InputField = ({ name, register, errors, setValue }) => {

  useEffect(() => {
    const group = localStorage.getItem('group');
    if (group) {
      setValue(name, group);
    }
  }, [setValue, name]);

  return (
    <label className={`input-field ${isEqual(errors, {}) ? '' : 'valid-error'}`}>
      <span className="input-field__label">Введите номер группы</span>
      <input
        className="input-field__input"
        placeholder="Например, 221201"
        autoComplete="off"
        {
          ...register(name, {
            required: true,
            pattern: /^([1-9][0-9]{5})\b(-[А-Я]{2})?/
          })
        }
      />
    </label>
  );
};

export default InputField;