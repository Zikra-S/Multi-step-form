import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";

export type Errors = {
  name: string;
  email: string;
  phone: string;
};

type FormState = {
  step: number;
  name: string;
  email: string;
  phone: string;
  errors: Errors;
  plan: string;
  yearly: boolean;
};

type Action =
  | { type: "SET_FIELD"; field: "name" | "email" | "phone"; value: string }
  | { type: "SET_ERRORS"; errors: Errors }
  | { type: "SET_PLAN"; plan: string }
  | { type: "TOGGLE_YEARLY" }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" };

const initialState: FormState = {
  step: 1,
  name: "",
  email: "",
  phone: "",
  errors: { name: "", email: "", phone: "" },
  plan: "arcade",
  yearly: false,
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SET_PLAN":
      return { ...state, plan: action.plan };
    case "TOGGLE_YEARLY":
      return { ...state, yearly: !state.yearly };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
}

type FormContextType = {
  state: FormState;
  dispatch: Dispatch<Action>;
};

export const FormContext = createContext<FormContextType>({
  state: initialState,
  dispatch: () => {},
});

export function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
}
