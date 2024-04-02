import { Message } from "./Message.model";
import { Room } from "./Room.model";
import { PaginatedUsers } from "./User.model";

export type RoomAction = {
  setRoom: {
    type: "setRoom";
    payload: Room;
  };
  setMessages: {
    type: "setMessages";
    payload: Message[];
  };
  addMessage: {
    type: "addMessage";
    payload: Message;
  };
};

export type ContactsAction = {
  setContacts: {
    type: "setContacts";
    payload: PaginatedUsers;
  };
};

export type ContactsActions = ContactsAction[keyof ContactsAction];

export type RoomActions = RoomAction[keyof RoomAction];
