import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { addOns } from "../data/addOns";

function StepThree() {
  const { state, dispatch } = useContext(FormContext);

  const price = (monthly: number) => (state.yearly ? monthly * 10 : monthly);
  const suffix = state.yearly ? "yr" : "mo";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Pick add-ons</h1>
      <p className="mb-6">Add-ons help enhance your gaming experience.</p>

      <div className="mb-6 grid gap-4">
        {addOns.map((addOn) => {
          const checked = state.addOns.includes(addOn.id);

          return (
            <label
              key={addOn.id}
              className={`flex cursor-pointer items-center gap-4 rounded border p-4 ${
                checked ? "border-blue-900 bg-blue-50" : "border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => dispatch({ type: "TOGGLE_ADDON", id: addOn.id })}
              />
              <div className="flex-1">
                <h3 className="font-bold">{addOn.name}</h3>
                <p className="text-sm">{addOn.description}</p>
              </div>
              <p>
                +${price(addOn.monthly)}/{suffix}
              </p>
            </label>
          );
        })}
      </div>

      <div className="flex justify-between">
        <button onClick={() => dispatch({ type: "PREV_STEP" })}>Go Back</button>
        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="rounded bg-blue-900 px-4 py-2 text-white"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepThree;