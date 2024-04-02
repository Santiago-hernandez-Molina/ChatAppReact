import { Dispatch, createContext } from "react";
import { RoomWithMessages } from "../Models/Room.model";
import { RoomActions } from "../Models/Action.model";

export const roomReducer = (state: RoomWithMessages, action: RoomActions) => {
  switch (action.type) {
    case "setRoom":
      return { ...state, room: action.payload };
    case "setMessages":
      return { ...state, messages: action.payload };
    case "addMessage":
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export const RoomContext = createContext<RoomWithMessages>({
  room: { id: 0, name: "", users: [] },
  messages: [],
});

export const RoomDispatchContext = createContext<Dispatch<RoomActions> | null>(
  null,
);
