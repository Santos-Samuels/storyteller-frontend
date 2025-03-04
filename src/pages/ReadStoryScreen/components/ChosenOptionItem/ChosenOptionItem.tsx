import { Tag, Typography } from "@/components";
import { IUserInteractionOption } from "@/shared/interfaces/user-interaction-option.entity";
import { FC, useMemo } from "react";
import * as S from "./styles";

interface ChosenOptionItemProps {
  options: IUserInteractionOption[];
}

const ChosenOptionItem: FC<ChosenOptionItemProps> = (props) => {
  const chosenOption = useMemo(
    () => props.options.find((option) => option.hasBeenChosen),
    [props.options]
  );

  if (!chosenOption) return;

  return (
    <S.Container>
      <Typography variant="body3">Você escolheu</Typography>
      <Tag type="blue" size="sm" label={chosenOption.label} />
    </S.Container>
  );
};

export default ChosenOptionItem;
