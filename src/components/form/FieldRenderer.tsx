import { Dispatch, SetStateAction } from "react";
import { PhoneNumberField, RadioGroup, Switch, TextField } from ".";
import { Field, FieldValue, FormData } from "../../typs";
import CheckboxGroup from "./CheckboxGroup";

interface FieldsRendererProps {
  fields: Field[];
  validationErrors: Record<string, string>;
  formValues: FormData;
  setFormValues: Dispatch<SetStateAction<FormData>>;
}

const FieldsRenderer = (props: FieldsRendererProps) => {
  const { fields, validationErrors, formValues, setFormValues } = props;

  const updateFieldValue = (fieldName: string, value: FieldValue) => {
    console.log(fieldName, value);

    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  return (
    <div className="fileds-wrapper">
      {fields.map((field) => {
        switch (field.type) {
          case "text":
          case "number":
            return (
              <TextField
                key={field.props.name}
                name={field.props?.name}
                label={field.props?.label}
                placeholder={field.props?.placeholder}
                isRequired={field.props?.isRequired}
                className={field.props?.className}
                errorMessage={validationErrors[field.props.name]}
                defaultValue={formValues[field.props.name] as string}
                onChange={(e) =>
                  updateFieldValue(field.props.name, e.target.value)
                }
              />
            );
          case "select":
            return (
              <RadioGroup
                key={field.props.name}
                name={field.props?.name}
                options={field.props.options || []}
                value={field.props?.value}
                onChange={(value) => updateFieldValue(field.props.name, value)}
                errorMessage={validationErrors[field.props.name]}
                isDisabled={field.props?.isDisabled}
              />
            );
          case "checkbox":
            return (
              <CheckboxGroup
                key={field.props.name}
                name={field.props?.name}
                options={field.props.options}
                isDisabled={field.props.isDisabled}
                isRequired={field.props.isRequired}
                value={field.props?.value}
                errorMessage={validationErrors[field.props.name]}
                onChange={(values) =>
                  updateFieldValue(field.props.name, values)
                }
              />
            );
          case "radio":
            return (
              <RadioGroup
                key={field.props.name}
                name={field.props?.name}
                options={field.props.options || []}
                value={field.props?.value}
                onChange={(value) => updateFieldValue(field.props.name, value)}
                errorMessage={validationErrors[field.props.name]}
              />
            );
          case "switch":
            return (
              <Switch
                key={field.props.name}
                name={field.props?.name}
                className={field.props?.className}
                defaultChecked={field.props?.defaultChecked}
                onChange={(e) =>
                  updateFieldValue(field.props.name, e.target.checked)
                }
                errorMessage={validationErrors[field.props.name]}
              />
            );
          case "phone":
            return (
              <PhoneNumberField
                key={field.props.name}
                name={field.props?.name}
                label={field.props?.label}
                onChange={(e) =>
                  updateFieldValue(field.props.name, e.target.value)
                }
                defaultValue={formValues[field.props.name] as string}
                errorMessage={validationErrors[field.props.name]}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FieldsRenderer;
