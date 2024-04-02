import style from "./roomCard.module.css";
import { Room } from "../../../../Models/Room.model";
import { useContext, useEffect, useState } from "react";
import {
  RoomContext,
  RoomDispatchContext,
} from "../../../../Context/Room.context";

type Props = {
  cardRoom: Room;
  closeSidebar: () => void;
};
export const RoomCard = ({ cardRoom, closeSidebar }: Props) => {
  const dispatch = useContext(RoomDispatchContext);
  const room = useContext(RoomContext);
  const [active, setActive] = useState(false);

  const isActive = () => {
    if (room == null) {
      return;
    }
    setActive(room.room.id == cardRoom.id);
  };

  useEffect(() => {
    isActive();
  }, [room]);

  const handleRoom = () => {
    dispatch!({ type: "setRoom", payload: cardRoom });
    closeSidebar();
  };

  return (
    <div
      className={`${style.card} ${active ? style["card-active"] : ""}`}
      onClick={handleRoom}
    >
      <p>{cardRoom.name}</p>
    </div>
  );
};
