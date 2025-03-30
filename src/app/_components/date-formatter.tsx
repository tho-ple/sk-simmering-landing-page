import { parseISO, format } from "date-fns";
import { de } from "date-fns/locale"; // Importiere das deutsche Locale

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d. MMMM yyyy", { locale: de })} 
    </time>
  );
};

export default DateFormatter;