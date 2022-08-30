// label
export const Label = ({ htmlFor, label, disabled }) => (
  <label
    htmlFor={htmlFor}
    className={`text-base uppercase font-space ${
      disabled ? "text-dark_grayish_violet cursor-not-allowed" : "text-gray-900"
    }`}
  >
    {label}
  </label>
);

// Input
export const Input = ({name, type, value, onChange, error, disabled, className, placeholder, rest}) => (
  <input
    id={name}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
    className={`px-4 form-input mt-2 border !rounded-md placeholder-gray-300 focus:border-very_dark_violet active:border-very_dark_violet hover:border-very_dark_violet text-black ${
      error && "border-warning"
    } ${disabled && "cursor-not-allowed"} ${className}`}
    {...rest}
  />
);

// Input with label
export const InputLabel = ({
  name,
  label,
  type,
  disabled,
  value,
  onChange,
  error,
  className,
  ...rest
}) => (
  <>
    <Label htmlFor={name} label={label} disabled={disabled} />
    <Input
      id={name}
      type={type || "text"}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error}
      className={className}
      {...rest}
    />
  </>
);
