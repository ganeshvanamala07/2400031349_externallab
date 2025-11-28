
export default function Input({
  label,
  type = "text",
  placeholder = "",
  error,
  className = "",
  ...props
}) {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="block text-sm font-semibold mb-1">{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`w-full border px-4 py-2 rounded-lg outline-none 
          ${error ? "border-red-500" : "border-gray-300"}
          focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
