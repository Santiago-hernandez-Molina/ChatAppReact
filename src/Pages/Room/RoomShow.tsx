import { useContext, useEffect, useRef } from "react";
import { InputMessage } from "./Components/InputMessage/InputMessage";
import { MessageComponent } from "./Components/Message/Message";
import { useFetchMessages } from "./Hooks/useMessage";
import style from "./roomShow.module.css";
import { RoomContext } from "../../Context/Room.context";
import { useWebsockets } from "./Hooks/useWebsockets";

export const RoomShow = () => {
  useFetchMessages();
  const room = useContext(RoomContext);
  const chatContainer = useRef<null | HTMLDivElement>(null);
  const { sendMessage } = useWebsockets();

  useEffect(() => {
    chatContainer!.current!.scrollTop = chatContainer.current!.scrollHeight;
  }, [room.messages]);

  return (
    <div className={style["chat-container"]}>
      <div ref={chatContainer} className={style["messages-section"]}>
        {room.messages.map((message, id) => (
          <MessageComponent
            key={`message-${id}`}
            message={message}
          ></MessageComponent>
        ))}
      </div>
      <div className={style["input-section"]}>
        <InputMessage sendMessage={sendMessage} />
      </div>
    </div>
  );
};
