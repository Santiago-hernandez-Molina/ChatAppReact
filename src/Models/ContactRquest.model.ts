import { Contact } from "./User.model";

export type ContactRequest = {
  id: number;
  toUserId: number;
  fromUserId: number;
  accepted: boolean;
  user: Contact;
};
