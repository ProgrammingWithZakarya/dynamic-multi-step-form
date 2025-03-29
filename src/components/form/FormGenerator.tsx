import { useReducer } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Fields, FormData, Step, Steps } from "../../typs";
import Button from "../Button";
import StepBox from "../StepBox";
import FieldsRenderer from "./FieldRenderer";
import { formReducer, State } from "./formReducer";

interface FormGeneratorProps {
  form: Steps;
}

const FormGenerator = (props: FormGeneratorProps) => {
  const { form } = props;

  const initialState: State = {
    stepPath: [form[0]],
    formValues: {},
    validationErrors: {},
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const currentStep = state.stepPath[state.stepPath.length - 1];

  const validateStep = (fields: Fields, formData: FormData) => {
    const errors: Record<string, string> = {};

    fields.forEach((field) => {
      const { name, isRequired } = field.props;

      const value = formData[name];

      if (!!isRequired && !value) {
        errors[name] = `Bitte ${(field.props as any)?.label || name} eingeben`;
      }

      if (typeof value === "string") {
        if (
          (field.props as any)?.type === "email" &&
          value &&
          !/\S+@\S+\.\S+/.test(value)
        ) {
          errors[name] = "Invalid email format";
        }

        if (
          field.type === "phone" &&
          value &&
          !/^(?!\+1\d{10}$)(?!\+34\d{9}$)(?!\+222\d{8}$)\d{10,}$/.test(value)
        ) {
          errors[name] = "Invalid phone number";
        }
      }
    });

    return errors;
  };

  const goToNextStep = () => {
    const errors = validateStep(currentStep.fields || [], state.formValues);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }
    dispatch({ type: "NEXT_STEP" });
  };

  const goToPrevStep = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const goToStep = (stepItem: Step) => {
    dispatch({ type: "GO_TO_STEP", payload: stepItem });
  };

  return (
    <div className="form-generator-container">
      {!!currentStep.title && (
        <h2
          style={{
            marginBottom: currentStep.description ? "1rem" : "2.5rem",
          }}
        >
          {currentStep.title}
        </h2>
      )}
      {!!currentStep.description && <p>{currentStep.description}</p>}

      {!!currentStep.fields?.length && (
        <FieldsRenderer
          validationErrors={state.validationErrors}
          fields={currentStep.fields}
          formValues={state.formValues}
          setFormValues={(name, value) =>
            dispatch({
              type: "SET_VALUE",
              payload: { name, value },
            })
          }
        />
      )}

      {!!currentStep?.steps && currentStep?.steps?.length > 1 && (
        <div className="step-boxes-container">
          {currentStep.steps.map((stepItem) => (
            <StepBox
              key={stepItem.name}
              label={stepItem.name}
              icon={stepItem.icon}
              onClick={() => goToStep(stepItem)}
            />
          ))}
        </div>
      )}

      <div className="steps-handlers-wrapper">
        <div
          className={
            currentStep.steps?.length === 1 ? "prev-button-wrapper" : ""
          }
        >
          {state.stepPath.length !== 1 && (
            <Button
              type="button"
              variant="secondary"
              onClick={goToPrevStep}
              icon={<GoArrowLeft />}
              isDisabled={state.stepPath.length === 1}
            ></Button>
          )}
        </div>

        <div className="next-button-wrapper">
          {currentStep.steps?.length === 1 && (
            <Button
              type="button"
              onClick={goToNextStep}
              icon={<GoArrowRight />}
              isDisabled={!currentStep.steps && !currentStep.steps[0]}
            >
              Weiter
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormGenerator;
