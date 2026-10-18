import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { addOns } from "../data/addOns";
import checkIcon from "../assets/images/icon-checkmark.svg";

function StepThree() {
  const { state, dispatch } = useContext(FormContext);

  const price = (monthly: number) => (state.yearly ? monthly * 10 : monthly);
  const suffix = state.yearly ? "yr" : "mo";

  return (
    <div className="flex h-full flex-col px-6 py-8 md:px-0 md:py-10">
      <h1 className="text-2xl font-bold text-blue-950 md:text-3xl">Pick add-ons</h1>
      <p className="mb-6 mt-2 text-grey-500 md:mb-8">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="grid gap-3 md:gap-4">
        {addOns.map((addOn) => {
          const checked = state.addOns.includes(addOn.id);

          return (
            <label
              key={addOn.id}
              className={`flex cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 hover:border-purple-600 md:px-6 md:py-4 ${
                checked ? "border-purple-600 bg-blue-50" : "border-purple-200"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => dispatch({ type: "TOGGLE_ADDON", id: addOn.id })}
                className="peer sr-only"
              />

              <span
                className={`grid size-5 shrink-0 place-items-center rounded border peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-purple-600 ${
                  checked ? "border-purple-600 bg-purple-600" : "border-purple-200 bg-white"
                }`}
              >
                {checked && <img src={checkIcon} alt="" />}
              </span>

              <div className="flex-1">
                <h3 className="font-medium text-blue-950">{addOn.name}</h3>
                <p className="text-sm text-grey-500">{addOn.description}</p>
              </div>

              <p className="text-sm text-purple-600">
                +${price(addOn.monthly)}/{suffix}
              </p>
            </label>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between md:mt-auto">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="cursor-pointer font-medium text-grey-500 hover:text-blue-950"
        >
          Go Back
        </button>
        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="cursor-pointer rounded-lg bg-blue-950 px-6 py-3 font-medium text-white hover:bg-blue-950/80"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepThree;