import React from "react";
import { BackDropModal, Container, ContentModal, Text } from "./styled";
import { ModalBaseProps, NativeSyntheticEvent } from "react-native";
import { ConfirmCircle } from "../../ComfirmCircle";
import { Button } from "../../Button";


interface ModalProps extends ModalBaseProps {
  verified: boolean;
  text: string;
  closeModal: () => void;
  redirect: () => void;
}

export function ComfirmationModal({
  verified,
  text,
  redirect,
  ...props
}: ModalProps) {

  return (
    <Container {...props} visible={props.visible}>
      <BackDropModal onPress={() => props.closeModal()}>
        <ContentModal>
          <ConfirmCircle verified={verified} />
          <Text>{text}</Text>
          <Button
            color="green"
            onPress={() => redirect()}
            placeholder="Voltar para Login"
          />
        </ContentModal>
      </BackDropModal>
    </Container>
  );
}
