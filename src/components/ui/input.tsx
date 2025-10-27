import { Controller } from "react-hook-form";
import type { InputFieldProps } from "../../types";

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  control,
  type = "text",
  placeholder,
  rules,
  multiline = false,
  rows = 4,
  autoComplete,
  errors,
}) => (
  <div>
    <label className="block mb-2 font-semibold text-slate-800" htmlFor={name}>
      {label}
    </label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) =>
        multiline ? (
          <textarea
            {...field}
            id={name}
            rows={rows}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-slate-900 text-base transition"
          />
        ) : (
          <input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-slate-900 text-base transition"
          />
        )
      }
    />
    {errors?.[name] && (
      <span className="text-red-500 text-xs mt-1 block">
        {errors[name].message}
      </span>
    )}
  </div>
);

export default InputField;
