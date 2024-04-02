import * as feather from "feather-icons";
import style from "./room.module.css";
import { useReducer, useState } from "react";
import { RoomShow } from "./RoomShow";
import { useFetchRooms } from "./Hooks/useRoom";
import { RoomCard } from "./Components/Contacts/RoomCard";
import {
  RoomContext,
  RoomDispatchContext,
  roomReducer,
} from "../../Context/Room.context";
import { RoomWithMessages } from "../../Models/Room.model";
import { RoomLayout } from "./Layout/RoomLayout";

const messageIcon = feather.icons["message-circle"].toSvg({});

export const RoomIndex = () => {
  const [sidebar, setSidebar] = useState(false);
  const rooms = useFetchRooms();

  const closeSidebar = () => {
    setSidebar(false);
  };

  const initialRoom: RoomWithMessages = {
    room: { id: 0, name: "", users: [] },
    messages: [],
  };

  const [room, dispatch] = useReducer(roomReducer, initialRoom);

  return (
    <>
      <RoomContext.Provider value={room}>
        <RoomDispatchContext.Provider value={dispatch}>
          <RoomLayout>
            <main className={style["room-container"]}>
              <div
                className={`${style["room-side"]} ${
                  sidebar ? style["room-side-active"] : ""
                }`}
              >
                <h3>Chats</h3>
                {rooms.map((room, id) => (
                  <RoomCard
                    closeSidebar={closeSidebar}
                    key={`room-${id}`}
                    cardRoom={room}
                  />
                ))}
              </div>
              <section className={style["chat-section"]}>
                {room.room.id !== 0 ? <RoomShow /> : <></>}
              </section>
            </main>

            <button
              onClick={() => setSidebar(!sidebar)}
              className={`${style["rooms-button"]} ${
                !sidebar ? style["rooms-button-inactive"] : ""
              }`}
            >
              <span dangerouslySetInnerHTML={{ __html: messageIcon }}></span>
            </button>
          </RoomLayout>
        </RoomDispatchContext.Provider>
      </RoomContext.Provider>
    </>
  );
};
