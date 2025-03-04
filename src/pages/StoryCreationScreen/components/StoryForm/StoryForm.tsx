import {
  GenerateStoryDTO,
  StorySizeEnum,
} from "@/shared/interfaces/story.entity";
import { Button, Form, Select } from "antd";
import { FC } from "react";
import * as S from "./styles";

const formInitialValues: GenerateStoryDTO = {
  theme: "",
  amountScenes: StorySizeEnum.Normal,
};

interface StoryFormProps {
  onSubmit: (values: GenerateStoryDTO) => void;
  isLoading: boolean;
}

const StoryForm: FC<StoryFormProps> = (props) => {
  return (
    <>
      <S.FormContainer
        onFinish={props.onSubmit}
        initialValues={formInitialValues}
        disabled={props.isLoading}
      >
        <Form.Item<GenerateStoryDTO>
          name="theme"
          rules={[{ required: true, message: "Escolha um tema!" }]}
        >
          <S.StyledInput
            type="text"
            placeholder="Ex: Principios da Cibersegurança"
          />
        </Form.Item>

        <Form.Item<GenerateStoryDTO>
          name="amountScenes"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value={StorySizeEnum.Short}>Curta</Select.Option>
            <Select.Option value={StorySizeEnum.Normal}>Normal</Select.Option>
            <Select.Option value={StorySizeEnum.Long}>Longa</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" loading={props.isLoading}>
            Submit
          </Button>
        </Form.Item>
      </S.FormContainer>

      {props.isLoading && (
        <S.StyledTypography
          variant="label1"
          children="Estamos criando sua história. Isso pode demorar alguns minutos..."
        />
      )}
    </>
  );
};

export default StoryForm;
