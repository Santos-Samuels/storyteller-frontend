import { FC, ReactNode } from "react";
import * as S from "./styles";

interface IModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = (props) => {
  if (!props.isOpen) return;

  return (
    <S.Overlay onClick={props.onClose}>
      <S.ContentContainer>{props.children}</S.ContentContainer>
    </S.Overlay>
  );
};

export default Modal;
