import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { plans } from "../data/plans";
import { addOns } from "../data/addOns";

function StepFour() {
  const { state, dispatch } = useContext(FormContext);

  const price = (monthly: number) => (state.yearly ? monthly * 10 : monthly);
  const suffix = state.yearly ? "yr" : "mo";

  const selectedPlan = plans.find((plan) => plan.id === state.plan) ?? plans[0];
  const selectedAddOns = addOns.filter((addOn) => state.addOns.includes(addOn.id));

  const total =
    price(selectedPlan.monthly) +
    selectedAddOns.reduce((sum, addOn) => sum + price(addOn.monthly), 0);

  return (
    <div className="flex h-full flex-col px-6 py-8 md:px-0 md:py-10">
      <h1 className="text-2xl font-bold text-blue-950 md:text-3xl">Finishing up</h1>
      <p className="mb-6 mt-2 text-grey-500 md:mb-8">
        Double-check everything looks OK before confirming.
      </p>

      <div className="rounded-lg bg-blue-50 p-4 md:px-6">
        <div
          className={`flex items-center justify-between ${
            selectedAddOns.length > 0 ? "border-b border-purple-200 pb-4" : ""
          }`}
        >
          <div>
            <h3 className="font-medium text-blue-950">
              {selectedPlan.name} ({state.yearly ? "Yearly" : "Monthly"})
            </h3>
            <button
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 2 })}
              className="cursor-pointer text-sm text-grey-500 underline hover:text-purple-600"
            >
              Change
            </button>
          </div>
          <p className="font-bold text-blue-950">
            ${price(selectedPlan.monthly)}/{suffix}
          </p>
        </div>

        {selectedAddOns.map((addOn) => (
          <div key={addOn.id} className="flex justify-between pt-4 text-sm">
            <p className="text-grey-500">{addOn.name}</p>
            <p className="text-blue-950">
              +${price(addOn.monthly)}/{suffix}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-6 md:px-6">
        <p className="text-sm text-grey-500">
          Total (per {state.yearly ? "year" : "month"})
        </p>
        <p className="text-lg font-bold text-purple-600 md:text-xl">
          {state.yearly ? "" : "+"}${total}/{suffix}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between md:mt-auto">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="cursor-pointer font-medium text-grey-500 hover:text-blue-950"
        >
          Go Back
        </button>
        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="cursor-pointer rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-600/70"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default StepFour;