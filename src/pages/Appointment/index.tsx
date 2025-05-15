import { useState } from "react";
import { ScrollView, Modal, Text, Alert } from "react-native";
import {
  Container,
  Title,
  SectionTitle,
  OptionButton,
  OptionText,
  Dropdown,
  DropdownText,
  SearchButton,
  SearchButtonText,
} from "./styles";
import { Calendar } from "../../components/Calendar";
import { RootStackParamsList } from "../../routes/index.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RenderTimes } from "../../components/RenderTimes";
import { ConfirmAppointment } from "../../components/ConfirmAppointment";
import { api } from "../../services/axios";
import dayjs from "dayjs";


// ================= CONFIGURAÇÃO DO CALENDÁRIO EM PORTUGUÊS =================


interface DateSelect {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}


type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Appointment">;
export function AppointmentScreen() {  // Horários disponíveis
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [timeFormated, setTimeFormated] = useState("")
  const [consultationType, setConsultationType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const {navigate} = useNavigation<NavigationProps>()
  const { params } = useRoute<RouteProp<RootStackParamsList>>()


  // Marcar data selecionada
  function onDayPress(day: DateSelect) {
    setSelectedDate(day.dateString);
  }

  // Confirmar agendamento
  async function confirmAppointment(){
    if (
      selectedDate &&
      selectedTime &&
      consultationType &&
      paymentType &&
      params?.specialty
    ) {

      const confirmAppointment = await api.post('/users/scheduling/create', {
        timeScheduling: timeFormated,
        doctor_id: params.id
      })

      console.log(confirmAppointment.data);
      
      setShowConfirmationModal(true);
    } else {
      alert("Por favor, preencha todos os campos para agendar sua consulta.");
    }
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Agendar Consulta</Title>

        {/* Calendário */}
        <SectionTitle>Selecione uma data</SectionTitle>
        <Calendar
            onDayPress={onDayPress}
            selectedDate={selectedDate}
        />

        {/* Horários disponíveis */}
        {selectedDate && (
          <RenderTimes
            selectedTime={selectedTime}
            selectedDate={selectedDate}
            setTimeFormated={setTimeFormated}
            setSelectedTime={setSelectedTime}
            
          />
        )}

        {/* Tipo de consulta */}
        <SectionTitle>Tipo de consulta</SectionTitle>
        <OptionButton
          selected={consultationType === "presencial"}
          onPress={() => setConsultationType("presencial")}
        >
          <OptionText selected={consultationType === "presencial"}>
            Presencial
          </OptionText>
        </OptionButton>
        <OptionButton
          selected={consultationType === "remoto"}
          onPress={() => setConsultationType("remoto")}
        >
          <OptionText selected={consultationType === "remoto"}>
            Online (Remoto)
          </OptionText>
        </OptionButton>

        {/* Tipo de pagamento */}
        <SectionTitle>Tipo de pagamento</SectionTitle>
        <OptionButton
          selected={paymentType === "convenio"}
          onPress={() => setPaymentType("convenio")}
        >
          <OptionText selected={paymentType === "convenio"}>
            Convênio Médico
          </OptionText>
        </OptionButton>
        <OptionButton
          selected={paymentType === "particular"}
          onPress={() => setPaymentType("particular")}
        >
          <OptionText selected={paymentType === "particular"}>
            Particular
          </OptionText>
        </OptionButton>

        {/* Especialidade médica */}
        <SectionTitle>Especialidade médica</SectionTitle>
        <Dropdown onPress={() =>{}}>
          <DropdownText>
            {params?.specialty || "Selecione uma especialidade"}
          </DropdownText>
        </Dropdown>

        {/* Botão de busca */}
        <SearchButton onPress={confirmAppointment}>
          <SearchButtonText>Confirmar Dados do Agendamento</SearchButtonText>
        </SearchButton>
      </ScrollView>

      {/* Modal de confirmação */}

      <ConfirmAppointment
        consultationType={consultationType}
        paymentType={paymentType}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        setShowConfirmationModal={setShowConfirmationModal}
        showConfirmationModal={showConfirmationModal}
        specialty={params?.specialty}
      />
    </Container>
  );
}
