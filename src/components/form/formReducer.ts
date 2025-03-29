import { FormData, Step, Steps } from "@/typs";

export interface State {
  stepPath: Steps;
  formValues: FormData;
  validationErrors: Record<string, string>;
}

export type Action =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; payload: Step }
  | { type: "SET_VALUE"; payload: { name: string; value: any } }
  | { type: "SET_ERRORS"; payload: Record<string, string> };

export const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NEXT_STEP": {
      const currentStep = state.stepPath[state.stepPath.length - 1];

      if (currentStep.steps?.length) {
        return {
          ...state,
          stepPath: [...state.stepPath, currentStep.steps[0]],
          validationErrors: {},
        };
      }
      return state;
    }

    case "PREV_STEP": {
      if (state.stepPath.length > 1) {
        return { ...state, stepPath: state.stepPath.slice(0, -1) };
      }
      return state;
    }

    case "GO_TO_STEP": {
      return { ...state, stepPath: [...state.stepPath, action.payload] };
    }

    case "SET_VALUE": {
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case "SET_ERRORS": {
      return { ...state, validationErrors: action.payload };
    }

    default:
      return state;
  }
};
