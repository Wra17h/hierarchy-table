import { IPersonDto } from "@/services/types";
import { personsDataFromServer } from "@/services/consts";

export const fetchDataFromServer = (): IPersonDto[] => personsDataFromServer;
