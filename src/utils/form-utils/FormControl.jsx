import React, { lazy } from "react";
import Loadable from "../../components/loadable";
const Input = Loadable(lazy(() => import("./Input")));
const TextArea = Loadable(lazy(() => import("./TextArea")));
const Select = Loadable(lazy(() => import("./Select")));
const RadioButtons = Loadable(lazy(() => import("./RadioButtons")));
const DatePicker = Loadable(lazy(() => import("./DatePicker")));
const Password = Loadable(lazy(() => import("./Password")));
const FileInput = Loadable(lazy(() => import("./FileInput")));
const CheckboxGroup = Loadable(lazy(() => import("./CheckboxGroup")));
const Checkbox = Loadable(lazy(() => import("./Checkbox")));
const PhoneNumInput = Loadable(lazy(() => import("./PhoneNumInput")));
// import OTPInput from './OTPInput'

const FormControl = ({ control, ...rest }) => {
  // input
  if (control === "input") return <Input {...rest} />;

  // textarea
  if (control === "textarea") return <TextArea {...rest} />;

  // select
  if (control === "select") return <Select {...rest} />;

  // radio
  if (control === "radio") return <RadioButtons {...rest} />;

  // checkbox
  if (control === "checkbox") return <Checkbox {...rest} />;

  // checkbox group
  if (control === "checkboxGroup") return <CheckboxGroup {...rest} />;

  // date
  if (control === "date") return <DatePicker {...rest} />;

  // passowrd
  if (control === "password") return <Password {...rest} />;

  // phone number
  if (control === "phone") return <PhoneNumInput {...rest} />;

  // otp input
  // if (control === "otp") return <OTPInput {...rest} />

  // file
  if (control === "file") return <FileInput {...rest} />;
};

export default FormControl;
