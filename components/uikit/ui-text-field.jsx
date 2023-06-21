import clsx from "clsx";

/**
 *
 * @param {{
 * label?:string,
 * required?:boolean,
 * helperText?: string
 * errorText?:string
 * className?:string
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */
export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  console.log(required);
  return (
    <div className={clsx(className)}>
      {label && (
        <label
          htmlFor="example2"
          className={clsx(
            required && `after:text-orange-600 after:content-["*"]`,
            `mb-1 block text-sm font-medium text-slate-900 after:ml-0.5 `
          )}
        >
          {label}
        </label>
      )}
      <input
        type="email"
        id="example2"
        required={required}
        className={clsx(
          `block p-2 text-sm leading-tight outline-0 border w-full rounded-md  shadow-sm 
         focus:ring-opacity-50  
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500`,
          errorText
            ? "focus:border-orange-600 focus:ring  focus:ring-orange-600/20 border-orange-600"
            : "focus:border-teal-600 focus:ring  focus:ring-teal-600/20 border-slate-200"
        )}
        {...inputProps}
      />
      {(helperText || errorText) && (
        <p
          className={clsx(
            errorText ? "text-orange-600" : "text-slate-400",
            "mt-1 text-sm "
          )}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}
