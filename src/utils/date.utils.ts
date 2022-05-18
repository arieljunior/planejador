import { format } from "date-fns";

export const formatDateString = (dateStr: string): string => {
	return format(new Date(dateStr), "dd/MM/yyyy HH:mm");
};