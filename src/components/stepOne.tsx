import { useContext } from "react";
import { FormContext } from "../context/formContext";
import type { Errors } from "../context/formContext";

const fields: {
  name: "name" | "email" | "phone";
  label: string;
  placeholder: string;
}[] = [
  { name: "name", label: "Name", placeholder: "e.g. Stephen King" },
  { name: "email", label: "Email Address", placeholder: "e.g. stephenking@lorem.com" },
  { name: "phone", label: "Phone Number", placeholder: "e.g. +1 234 567 890" },
];

function StepOne() {
  const { state, dispatch } = useContext(FormContext);

  const validate = (): Errors => {
    const errors: Errors = { name: "", email: "", phone: "" };

    if (state.name.trim() === "") errors.name = "This field is required";

    if (state.email.trim() === "") errors.email = "This field is required";
    else if (!state.email.includes("@")) errors.email = "Invalid email";

    if (state.phone.trim() === "") errors.phone = "This field is required";

    return errors;
  };

  const handleNext = () => {
    const errors = validate();
    dispatch({ type: "SET_ERRORS", errors });

    const hasErrors = Object.values(errors).some((message) => message !== "");
    if (!hasErrors) dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div className="flex h-full flex-col px-6 py-8 md:px-0 md:py-10">
      <h1 className="text-2xl font-bold text-blue-950 md:text-3xl">Personal info</h1>
      <p className="mb-6 mt-2 text-grey-500 md:mb-8">Please provide your name, email address, and phone number.</p>

      {fields.map((field) => {
        const error = state.errors[field.name];

        return (
          <div key={field.name} className="mb-4 md:mb-6">
            <div className="mb-1 flex items-center justify-between">
              <label htmlFor={field.name} className="text-sm text-blue-950">
                {field.label}
              </label>
              {error && <p className="text-sm font-bold text-red-500">{error}</p>}
            </div>

            <input
              id={field.name}
              value={state[field.name]}
              placeholder={field.placeholder}
              aria-invalid={error !== ""}
              onChange={(e) => dispatch({ type: "SET_FIELD", field: field.name, value: e.target.value })}
              className={`w-full rounded-lg border px-4 py-3 font-medium text-blue-950 outline-none placeholder:text-grey-500 focus:border-purple-600 ${
                error ? "border-red-500" : "border-purple-200"
              }`}
            />
          </div>
        );
      })}

      <div className="mt-8 flex justify-end md:mt-auto">
        <button onClick={handleNext} className="cursor-pointer rounded-lg bg-blue-950 px-6 py-3 font-medium text-white hover:bg-blue-950/80">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepOne;
