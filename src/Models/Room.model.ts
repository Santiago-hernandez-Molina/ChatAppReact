import { Message } from "./Message.model";
import { User } from "./User.model";

export type Room = {
  id: number;
  name: string;
  users: User[];
};

export type RoomWithMessages = {
	room: Room
	messages: Message[]
}
