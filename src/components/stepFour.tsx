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
    <div className="p-6">
      <h1 className="text-3xl font-bold">Finishing up</h1>
      <p className="mb-6">Double-check everything looks OK before confirming.</p>

      <div className="mb-6 rounded bg-gray-100 p-4">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h3 className="font-bold">
              {selectedPlan.name} ({state.yearly ? "Yearly" : "Monthly"})
            </h3>
            <button
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 2 })}
              className="text-sm underline"
            >
              Change
            </button>
          </div>
          <p className="font-bold">
            ${price(selectedPlan.monthly)}/{suffix}
          </p>
        </div>

        {selectedAddOns.map((addOn) => (
          <div key={addOn.id} className="flex justify-between pt-4 text-sm">
            <p>{addOn.name}</p>
            <p>
              +${price(addOn.monthly)}/{suffix}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p>Total (per {state.yearly ? "year" : "month"})</p>
        <p className="text-xl font-bold">
          +${total}/{suffix}
        </p>
      </div>

      <div className="flex justify-between">
        <button onClick={() => dispatch({ type: "PREV_STEP" })}>Go Back</button>
        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="rounded bg-blue-900 px-4 py-2 text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default StepFour;