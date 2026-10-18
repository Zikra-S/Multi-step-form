import { useContext } from "react";
import { FormContext } from "../context/formContext";
import sidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import sidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

function Sidebar() {
  const { state } = useContext(FormContext);
  const activeStep = Math.min(state.step, 4);

  return (
    <aside className="relative h-43 overflow-hidden md:h-142 md:w-68.5 md:shrink-0 md:rounded-lg">
      <img src={sidebarMobile} alt="" className="absolute inset-0 size-full object-cover md:hidden" />
      <img src={sidebarDesktop} alt="" className="absolute inset-0 hidden size-full object-cover md:block" />

      <ol className="relative flex justify-center gap-4 pt-8 md:flex-col md:gap-8 md:p-8">
        {steps.map((name, index) => {
          const number = index + 1;
          const active = number === activeStep;

          return (
            <li key={name} aria-current={active ? "step" : undefined} className="flex items-center gap-4">
              <span
                className={`grid size-8 place-items-center rounded-full border font-bold ${
                  active ? "border-blue-200 bg-blue-200 text-blue-950" : "border-white text-white"
                }`}>
                {number}
              </span>
              <div className="hidden md:block">
                <p className="text-xs text-blue-300">STEP {number}</p>
                <p className="text-sm font-bold tracking-widest text-white uppercase">{name}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

export default Sidebar;
