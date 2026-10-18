import { useContext } from "react";
import { FormContext } from "../context/formContext";
import type { Errors } from "../context/formContext";

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
    <div className="p-6">
      <h1 className="text-3xl font-bold">Personal info</h1>
      <p className="mb-6">Please provide your name, email address, and phone number.</p>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        className="mb-1 block w-full border p-2"
        placeholder="e.g. Stephen King"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })}
      />
      <p className="mb-4 text-sm text-red-500">{state.errors.name}</p>

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        className="mb-1 block w-full border p-2"
        placeholder="e.g. stephenking@lorem.com"
        value={state.email}
        onChange={(e) => dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })}
      />
      <p className="mb-4 text-sm text-red-500">{state.errors.email}</p>

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        className="mb-1 block w-full border p-2"
        placeholder="e.g. +1 234 567 890"
        value={state.phone}
        onChange={(e) => dispatch({ type: "SET_FIELD", field: "phone", value: e.target.value })}
      />
      <p className="mb-6 text-sm text-red-500">{state.errors.phone}</p>

      <button onClick={handleNext} className="rounded bg-blue-900 px-4 py-2 text-white">
        Next Step
      </button>
    </div>
  );
}

export default StepOne;
