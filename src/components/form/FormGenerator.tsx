import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Fields, FormData, Step, Steps } from "../../typs";
import Button from "../Button";
import StepBox from "../StepBox";
import FieldsRenderer from "./FieldRenderer";

interface FormGeneratorProps {
  form: Steps;
}

const FormGenerator = (props: FormGeneratorProps) => {
  const { form } = props;

  const initialStep = form[0];

  const [stepPath, setStepPath] = useState<Steps>([initialStep]);

  const [formValues, setFormValues] = useState<FormData>({});
  const [vlidationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const currentStep = stepPath[stepPath.length - 1];

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
    const validationErrors = validateStep(currentStep.fields || [], formValues);

    if (Object.keys(validationErrors).length > 0) {
      setValidationErrors(validationErrors);
      return false;
    }
    if (currentStep.steps?.length) {
      setStepPath([...stepPath, currentStep.steps[0]]);
      return true;
    }
  };

  const goToPrevStep = () => {
    if (stepPath.length > 1) {
      setStepPath(stepPath.slice(0, -1));
    }
  };

  const goToStep = (stepItem: Step) => {
    setStepPath([...stepPath, stepItem]);
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
          validationErrors={vlidationErrors}
          fields={currentStep.fields}
          formValues={formValues}
          setFormValues={setFormValues}
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
          {stepPath.length !== 1 && (
            <Button
              type="button"
              variant="secondary"
              onClick={goToPrevStep}
              icon={<GoArrowLeft />}
              isDisabled={stepPath.length === 1}
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
