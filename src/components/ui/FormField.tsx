import React from 'react';
import type {FormFieldProps} from '../../domain/types';

export const FormField: React.FC<FormFieldProps> = ({
                                               label,
                                               type = 'text',
                                               name,
                                               value,
                                               onChange,
                                               required = false,
                                               rows
                                             }) => {
  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Component
        type={type !== 'textarea' ? type : undefined}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
      />
    </div>
  );
};

