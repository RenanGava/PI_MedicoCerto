import { StyledCalendar } from "./styles";
import { theme } from "../../global/styles/theme";
import { DateData, LocaleConfig } from "react-native-calendars";


LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";

interface CalendarProps{
    onDayPress: (data: DateData) => void | undefined
    selectedDate: string
}

const configCalendar = {
  calendarBackground: theme.colors.white000,
  textSectionTitleColor: theme.colors.green500,
  selectedDayBackgroundColor: theme.colors.green500,
  selectedDayTextColor: theme.colors.white000,
  todayTextColor: theme.colors.green500,
  dayTextColor: theme.colors.gray900,
  textDisabledColor: theme.colors.green100,
  arrowColor: theme.colors.green500,
};


export function Calendar({ onDayPress, selectedDate }: CalendarProps){




    return <StyledCalendar
              onDayPress={e => onDayPress(e)}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: theme.colors.green500,
                },
              }}
              theme={configCalendar}
              monthFormat={"MMMM yyyy"}
              firstDay={0} // 0 = Domingo, 1 = Segunda
            />
}