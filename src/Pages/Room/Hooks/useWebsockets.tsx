import { useContext, useEffect, useState } from "react";
import { WS_URL } from "../../../Shared/Constans/api.constants";
import {
  RoomContext,
  RoomDispatchContext,
} from "../../../Context/Room.context";
import { Message } from "../../../Models/Message.model";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";

export const useWebsockets = () => {
  const room = useContext(RoomContext);
  const user = useSelector((state: RootState) => state.user);
  let [socket, setWebsocket] = useState<WebSocket | null>(null);
  const dispatch = useContext(RoomDispatchContext);

  useEffect(() => {
    const initSocket = new WebSocket(`${WS_URL}/v1/room/ws/${room?.room.id}`);

    initSocket.onopen = () => console.log("connected");

    initSocket.onmessage = (event: MessageEvent<string>) => {
      if (event.data === null) {
        return;
      }

      dispatch!({ type: "addMessage", payload: JSON.parse(event.data) });
    };
    setWebsocket(initSocket);

    return () => {
      initSocket.close();
    };
  }, [room.room]);

  const sendMessage = (messageContent: string) => {
    if (!socket) {
      return;
    }
    const message: Message = {
      id: 0,
      content: messageContent,
      user: user,
    };
    dispatch!({ type: "addMessage", payload: message });
	console.log("a");
	
    socket.send(JSON.stringify(message));
  };

  return { sendMessage, socket };
};
