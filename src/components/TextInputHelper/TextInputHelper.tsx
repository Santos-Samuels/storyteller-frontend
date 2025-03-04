import { FC } from "react";
import { InputStatus } from "../TextInput/utils/types";
import { TextInputHelperContainer, TypographyStyled } from "./styles";

interface TextInputHelperProps {
  text: string;
  type: InputStatus;
}

const TextInputHelper: FC<TextInputHelperProps> = ({ text, type }) => {
  // const getIcon = () => {
  //   if (type === "error")
  //     return (
  //       <IconStyled
  //         $type={type}
  //         type="notice2Icon"
  //         width={16}
  //         height={16}
  //         testID="textInputHelperErrorIcon"
  //       />
  //     );
  //   if (type === "success")
  //     return (
  //       <IconStyled
  //         $type={type}
  //         type="validateIcon"
  //         width={16}
  //         height={16}
  //         testID="textInputHelperSuccessIcon"
  //       />
  //     );

  //   return;
  // };

  return (
    <TextInputHelperContainer>
      {/* {getIcon()} */}
      <TypographyStyled variant="body3" $type={type}>
        {text}
      </TypographyStyled>
    </TextInputHelperContainer>
  );
};

export default TextInputHelper;
