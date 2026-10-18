import { useContext } from "react";
import { FormContext } from "./context/formContext";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";

function App() {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      {state.step === 1 && <StepOne />}
      {state.step === 2 && <StepTwo />}

      {state.step === 3 && (
        <div className="p-6">
          <p>Step 3 is coming soon 🚧</p>
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
        </div>
      )}
    </>
  );
}

export default App;
