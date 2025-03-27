import { CheckboxGroupProps } from "./components/form/CheckboxGroup";
import { PhoneNumberFieldProps } from "./components/form/PhoneNumberFiled";
import { RadioGroupProps } from "./components/form/RadioGroup";
import { SwitchProps } from "./components/form/Switch";
import { TextFieldProps } from "./components/form/TextField";

export type Field =
  | { type: "text"; props: TextFieldProps }
  | { type: "number"; props: TextFieldProps }
  | { type: "select"; props: RadioGroupProps }
  | { type: "checkbox"; props: CheckboxGroupProps }
  | { type: "phone"; props: PhoneNumberFieldProps }
  | { type: "radio"; props: RadioGroupProps }
  | { type: "switch"; props: SwitchProps };

export type Fields = Field[];

export interface Step {
  name: string;
  title: string;
  description?: string;
  steps?: Steps;
  fields?: Fields;
  hasSubmitButton?: boolean;
}

export type Steps = Step[];

export type FieldValue = string | string[] | boolean;
export type FormData = Record<string, FieldValue>;
