import { useContext } from "react";
import { FormContext } from "./context/formContext";
import StepOne from "./components/stepOne";

function App() {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      {state.step === 1 && <StepOne />}

      {state.step === 2 && (
        <div className="p-6">
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
        </div>
      )}
    </>
  );
}

export default App;