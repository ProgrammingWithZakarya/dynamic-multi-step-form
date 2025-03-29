import { JSX } from "react";
import { CheckboxGroupProps } from "./components/form/CheckboxGroup";
import { PhoneNumberFieldProps } from "./components/form/PhoneNumberFiled";
import { RadioGroupProps } from "./components/form/RadioGroup";
import { SwitchProps } from "./components/form/Switch";
import { TextFieldProps } from "./components/form/TextField";
import { SliderProps } from "./components/form/Slider";

export type Field =
  | { type: "text"; props: TextFieldProps }
  | { type: "number"; props: TextFieldProps }
  | { type: "select"; props: RadioGroupProps }
  | { type: "checkbox"; props: CheckboxGroupProps }
  | { type: "phone"; props: PhoneNumberFieldProps }
  | { type: "radio"; props: RadioGroupProps }
  | { type: "switch"; props: SwitchProps }
  | { type: "slider"; props: SliderProps };

export type Fields = Field[];

export interface Step {
  name: string;
  icon?: JSX.Element;
  title: string;
  description?: string;
  steps?: Steps;
  fields?: Fields;
  hasSubmitButton?: boolean;
}

export type Steps = Step[];

export type FieldValue = string | string[] | boolean;
export type FormData = Record<string, FieldValue>;
