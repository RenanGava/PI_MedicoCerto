import dayjs from "dayjs";
import { SectionTitle, TimeSlotButton, TimeSlotContainer, TimeSlotText } from "./styles";


interface RenderTimesProps{
    selectedTime: string;
    selectedDate: string;
    setTimeFormated: (data: string) => void
    setSelectedTime: (data: string) => void
}

const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];


export function RenderTimes({ selectedTime, setSelectedTime, setTimeFormated, selectedDate }: RenderTimesProps) {


  function handleSelectedDate(time: string) {
      setSelectedTime(time)

      const formatDate = dayjs(selectedDate+'T'+time+':00.000Z').toISOString()
      
      setTimeFormated(formatDate);
    }

  return (
    <>
      <SectionTitle>Horários disponíveis</SectionTitle>
      <TimeSlotContainer>
        {availableTimes.map((time) => (
          <TimeSlotButton
            key={time}
            selected={selectedTime === time}
            onPress={() => {handleSelectedDate(time)}}
          >
            <TimeSlotText selected={selectedTime === time}>{time}</TimeSlotText>
          </TimeSlotButton>
        ))}
      </TimeSlotContainer>
    </>
  );
}
