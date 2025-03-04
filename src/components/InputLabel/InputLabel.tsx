import { FC } from "react";
import { Label, RequiredText } from "./styles";

export interface InputLabelProps {
  label: string;
  required?: boolean;
}

const InputLabel: FC<InputLabelProps> = (props) => {
  return (
    <Label variant="label2">
      {props.label}
      {props.required && <RequiredText variant="label2">*</RequiredText>}
    </Label>
  );
};

export default InputLabel;
