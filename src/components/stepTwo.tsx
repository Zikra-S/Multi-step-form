import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { plans } from "../data/plans";

function StepTwo() {
  const { state, dispatch } = useContext(FormContext);

  const price = (monthly: number) => (state.yearly ? monthly * 10 : monthly);
  const suffix = state.yearly ? "yr" : "mo";

  return (
    <div className="flex h-full flex-col px-6 py-8 md:px-0 md:py-10">
      <h1 className="text-2xl font-bold text-blue-950 md:text-3xl">Select your plan</h1>
      <p className="mb-6 mt-2 text-grey-500 md:mb-8">You have the option of monthly or yearly billing.</p>

      <div className="mb-6 grid gap-3 md:grid-cols-3 md:gap-4">
        {plans.map((plan) => {
          const selected = state.plan === plan.id;

          return (
            <button
              key={plan.id}
              onClick={() => dispatch({ type: "SET_PLAN", plan: plan.id })}
              aria-pressed={selected}
              className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 text-left hover:border-purple-600 md:flex-col md:gap-10 ${
                selected ? "border-purple-600 bg-blue-50" : "border-purple-200"
              }`}>
              <img src={plan.icon} alt="" className="size-10" />
              <div>
                <h3 className="font-medium text-blue-950">{plan.name}</h3>
                <p className="text-sm text-grey-500">
                  ${price(plan.monthly)}/{suffix}
                </p>
                {state.yearly && <p className="mt-1 text-xs text-blue-950">2 months free</p>}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6 rounded-lg bg-blue-50 py-3">
        <span className={`text-sm font-medium ${state.yearly ? "text-grey-500" : "text-blue-950"}`}>Monthly</span>

        <button
          role="switch"
          aria-checked={state.yearly}
          aria-label="Yearly billing"
          onClick={() => dispatch({ type: "TOGGLE_YEARLY" })}
          className="relative h-5 w-9 cursor-pointer rounded-full bg-blue-950">
          <span className={`absolute top-1 size-3 rounded-full bg-white transition-all ${state.yearly ? "left-5" : "left-1"}`} />
        </button>

        <span className={`text-sm font-medium ${state.yearly ? "text-blue-950" : "text-grey-500"}`}>Yearly</span>
      </div>

      <div className="mt-8 flex items-center justify-between md:mt-auto">
        <button onClick={() => dispatch({ type: "PREV_STEP" })} className="cursor-pointer font-medium text-grey-500 hover:text-blue-950">
          Go Back
        </button>
        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="cursor-pointer rounded-lg bg-blue-950 px-6 py-3 font-medium text-white hover:bg-blue-950/80">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
