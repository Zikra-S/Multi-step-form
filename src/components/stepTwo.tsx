import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { plans } from "../data/plans";

function StepTwo() {
  const { state, dispatch } = useContext(FormContext);

  const price = (monthly: number) => (state.yearly ? monthly * 10 : monthly);
  const suffix = state.yearly ? "yr" : "mo";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Select your plan</h1>
      <p className="mb-6">You have the option of monthly or yearly billing.</p>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => dispatch({ type: "SET_PLAN", plan: plan.id })}
            aria-pressed={state.plan === plan.id}
            className={`rounded border p-4 text-left ${state.plan === plan.id ? "border-blue-900 bg-blue-50" : "border-gray-300"}`}>
            <h3 className="font-bold">{plan.name}</h3>
            <p>
              ${price(plan.monthly)}/{suffix}
            </p>
            {state.yearly && <p className="text-sm">2 months free</p>}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-center gap-4">
        <span className={state.yearly ? "text-gray-400" : "font-bold"}>Monthly</span>
        <button
          role="switch"
          aria-checked={state.yearly}
          aria-label="Yearly billing"
          onClick={() => dispatch({ type: "TOGGLE_YEARLY" })}
          className="rounded bg-blue-900 px-3 py-1 text-white">
          {state.yearly ? "ON" : "OFF"}
        </button>
        <span className={state.yearly ? "font-bold" : "text-gray-400"}>Yearly</span>
      </div>

      <div className="flex justify-between">
        <button onClick={() => dispatch({ type: "PREV_STEP" })}>Go Back</button>
        <button onClick={() => dispatch({ type: "NEXT_STEP" })} className="rounded bg-blue-900 px-4 py-2 text-white">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
