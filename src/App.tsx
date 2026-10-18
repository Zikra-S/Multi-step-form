import { useContext } from "react";
import { FormContext } from "./context/formContext";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import StepFive from "./components/stepFive";

function App() {
  const { state } = useContext(FormContext);

  return (
    <>
      {state.step === 1 && <StepOne />}
      {state.step === 2 && <StepTwo />}
      {state.step === 3 && <StepThree />}
      {state.step === 4 && <StepFour />}
      {state.step === 5 && <StepFive />}
    </>
  );
}

export default App;