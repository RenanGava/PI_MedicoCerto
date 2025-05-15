import { Modal } from "react-native";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButton,
  ModalButtonText,
  Text,
} from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/index.routes";
import { useNavigation } from "@react-navigation/native";

interface ConfirmAppointmentProps {
  showConfirmationModal: boolean;
  setShowConfirmationModal: (param: boolean) => void;
  selectedDate: string;
  selectedTime: string;
  consultationType: string;
  paymentType: string;
  specialty: string | undefined;
}


type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Appointment">;

export function ConfirmAppointment({
  showConfirmationModal,
  setShowConfirmationModal,
  consultationType,
  paymentType,
  selectedDate,
  selectedTime,
  specialty,
}: ConfirmAppointmentProps) {

  const { navigate } = useNavigation<NavigationProps>()
  return (
    <Modal
      visible={showConfirmationModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setShowConfirmationModal(false)
      }}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Confirmação de Agendamento</ModalTitle>
          <ModalText>
            <Text>Data:</Text>
            {selectedDate.split("-").reverse().join("/")}
          </ModalText>
          <ModalText>
            <Text>Horário:</Text> {selectedTime}
          </ModalText>
          <ModalText>
            <Text>Tipo:</Text>
            {consultationType === "presencial"
              ? "Presencial"
              : "Online (Remoto)"}
          </ModalText>
          <ModalText>
            <Text>Pagamento:</Text>
            {paymentType === "convenio" ? "Convênio Médico" : "Particular"}
          </ModalText>
          <ModalText>
            <Text>Especialidade:</Text>
            {specialty}
          </ModalText>

          <ModalButton
            onPress={() => {
              setShowConfirmationModal(false);

              navigate('Home')
              alert("Consulta agendada com sucesso!");
            }}
          >
            <ModalButtonText>Confirmar Agendamento</ModalButtonText>
          </ModalButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
