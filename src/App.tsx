import { useContext } from "react";
import { FormContext } from "./context/formContext";

function App() {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className="p-6">
      <p>Step: {state.step}</p>

      <input className="border p-2" value={state.name} onChange={(e) => dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })} />
      <p>Name on the whiteboard: {state.name}</p>

      <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
    </div>
  );
}

export default App;
