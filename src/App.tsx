import { useContext } from "react";
import { FormContext } from "./context/formContext";
import Sidebar from "./components/sideBar";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import StepFive from "./components/stepFive";

function App() {
  const { state } = useContext(FormContext);

  return (
    <main className="min-h-screen bg-blue-100 font-sans text-blue-950 md:flex md:items-center md:justify-center">
      <div className="md:flex md:w-[940px] md:rounded-2xl md:bg-white md:p-4 md:shadow-lg">
        <Sidebar />

        <div className="relative mx-4 -mt-[72px] rounded-xl bg-white shadow-lg md:mx-0 md:mt-0 md:flex-1 md:px-[60px] md:shadow-none">
          {state.step === 1 && <StepOne />}
          {state.step === 2 && <StepTwo />}
          {state.step === 3 && <StepThree />}
          {state.step === 4 && <StepFour />}
          {state.step === 5 && <StepFive />}
        </div>
      </div>
    </main>
  );
}

export default App;
