import React, { ReactElement } from 'react';
import { ErrorMessage, useField } from 'formik';

interface CustomFieldProps {
  label: string;
  name: string;
  type: string;
}
export const CustomField = ({
  label,
  ...props
}: CustomFieldProps): ReactElement => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete="off"
        id={field.name}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
