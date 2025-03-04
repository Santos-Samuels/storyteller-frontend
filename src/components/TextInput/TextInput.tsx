import { FC, ReactNode, useState } from "react";
import InputLabel from "../InputLabel/InputLabel";
import {
  InputStyled,
  RightContentContainer,
  TextInputContainer,
  TextInputHelperStyled,
} from "./styles";
import { InputStatus } from "./utils/types";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  label?: string;
  helperText?: string;
  placeholder?: string;
  hasError?: boolean;
  hasSuccess?: boolean;
  disabled?: boolean;
  value: string | number | undefined;
  required?: boolean;
  maxLength?: number;
  fullWidth?: boolean;
}

const TextInput: FC<TextInputProps> = ({ fullWidth = true, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const getInputStatus = (): InputStatus => {
    if (rest.disabled) return "disabled";
    if (focused) return "focused";
    if (rest.hasError) return "error";
    if (rest.hasSuccess) return "success";

    return "normal";
  };

  return (
    <div>
      {rest.label && <InputLabel label={rest.label} required={rest.required} />}

      <TextInputContainer
        $type={"default"}
        $status={getInputStatus()}
        $isDisabled={Boolean(rest.disabled)}
        $fullWidth={fullWidth}
      >
        {rest.leftAdornment}
        <InputStyled
          placeholder={rest.placeholder}
          disabled={rest.disabled}
          onFocus={() => setFocused(true)}
          maxLength={rest.maxLength}
          type="text"
          {...rest}
        />

        {rest.rightAdornment && (
          <RightContentContainer>{rest.rightAdornment}</RightContentContainer>
        )}
      </TextInputContainer>

      {rest.helperText && (
        <TextInputHelperStyled text={rest.helperText} type={getInputStatus()} />
      )}
    </div>
  );
};

export default TextInput;
