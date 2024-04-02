import { createContext } from "react";
import { PaginatedUsers } from "../Models/User.model";

type ContactsContextModel = {
  pu: PaginatedUsers;
  sendFilter: (username: string) => void;
};
export const ContactsContext = createContext<ContactsContextModel | null>(null);
