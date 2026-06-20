function Input({
    label,
    name,
    type = "text",
    value,
    onChange,
    error,
    placeholder,
    required = false,
    min,
    max,
    ...rest
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray mb-1"
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min={min}
                max={max}
                required={required}
                className={`w-full border rounded-lg px-3 py-2 bg-dark text-white placeholder:text-gray/60
                    focus:outline-none focus:ring-2 transition-colors
                    [color-scheme:dark]
                    ${error
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-border focus:ring-primary/50"
                    }`}
                {...rest}
            />
            {error && (
                <p className="text-xs text-red-500 mt-1">{error}</p>
            )}
        </div>
    )
}

export default Input
