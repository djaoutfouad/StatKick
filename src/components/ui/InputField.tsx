import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: 'number' | 'text';
  value: number | string;
  onChange: (value: any) => void;
  min?: number;
  max?: number;
  step?: number | string;
  suffix?: string;
  prefix?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'number',
  value,
  onChange,
  min,
  max,
  step = 'any',
  suffix,
  prefix,
  helperText,
  error,
  required = false,
  placeholder,
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const val = e.target.value === '' ? '' : Number(e.target.value);
      onChange(val);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={id} className="block text-xs font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {helperText && (
          <span className="text-[11px] text-gray-600">
            {helperText}
          </span>
        )}
      </div>

      <div className="relative rounded-lg shadow-2xs">
        {prefix && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-xs text-gray-600 font-medium">{prefix}</span>
          </div>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          className={`block w-full rounded-lg border py-2 text-sm text-gray-900  bg-white  transition-colors focus:outline-none focus:ring-2 ${
            prefix ? 'pl-8' : 'pl-3.5'
          } ${suffix ? 'pr-10' : 'pr-3.5'} ${
            error
              ? 'border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300  focus:border-green-600 focus:ring-green-500/20'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />

        {suffix && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-xs text-gray-600 font-medium">{suffix}</span>
          </div>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600 mt-1 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};
