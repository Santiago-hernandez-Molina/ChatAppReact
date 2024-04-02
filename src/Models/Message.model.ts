import { User } from "./User.model";

export type Message = {
  id: number;
  content: string;
  user: User | null;
};
