import { useState } from "react";
import { Fields, FormData, Step, Steps } from "../../typs";
import Center from "../Center";
import StepBox from "../StepBox";
import Button from "../Button";
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
        errors[name] = `${(field.props as any)?.label || name} is required`;
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
    console.log("formValues:", formValues);

    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation Errors: ", validationErrors);
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
      {!!currentStep.title && <h2>{currentStep.title}</h2>}
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
        <Center gap={16}>
          {currentStep.steps.map((stepItem) => (
            <StepBox key={stepItem.name} onClick={() => goToStep(stepItem)}>
              <h4>{stepItem.title}</h4>
            </StepBox>
          ))}
        </Center>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {stepPath.length !== 1 && (
            <Button
              type="button"
              onClick={goToPrevStep}
              isDisabled={stepPath.length === 1}
            >
              Prev
            </Button>
          )}
        </div>

        <div>
          {currentStep.steps?.length === 1 && (
            <Button
              type="button"
              onClick={goToNextStep}
              isDisabled={!currentStep.steps && !currentStep.steps[0]}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormGenerator;
