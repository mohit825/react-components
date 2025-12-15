import React, { useState } from "react";

export default function DynamicForm({ config }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const shouldDisplay = (field) => {
    if (!field.dependsOn) return true;
    if (typeof field.dependsOn === "string") {
      if (typeof field.showIf === "string")
        return values[field.dependsOn] === field.showIf;
      if (typeof field.showIf === "function") return field.showIf(values);
    }
    if (Array.isArray(field.dependsOn)) return field.showIf(values);
    return false;
  };
  const validateForm = () => {
    const newErrors = {};
    config.forEach((field) => {
      if (!shouldDisplay(field)) return;
      const value = values[field.name];
      const rules = field.validation;
      if (rules?.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (rules?.pattern && !rules.pattern.test(value)) {
        newErrors[field.name] = rules.message || `${field.label} is invalid`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form submitted:", values);
    alert("Check console for submitted data!");
  };

  console.log(config, "k");
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-lg mx-auto space-y-4 border rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-2">Dynamic Form Engine</h2>
      {config.map((field) =>
        shouldDisplay(field) ? (
          <div key={field.name}>
            <label className="block font-medium mb-1">{field.label}</label>
            {field.type === "text" && (
              <input
                type="text"
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
            )}
            {field.type === "select" && (
              <select
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              >
                <option value="">Select</option>
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
            {field.type === "checkbox" && (
              <input
                type="checkbox"
                name={field.name}
                checked={values[field.name] || false}
                onChange={handleChange}
              />
            )}
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ) : null
      )}
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
}
