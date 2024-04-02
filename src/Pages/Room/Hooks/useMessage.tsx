import { useContext, useEffect } from "react";
import { getAllMessages } from "../Services/GetAllMessages";
import {
  RoomContext,
  RoomDispatchContext,
} from "../../../Context/Room.context";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";

export const useFetchMessages = () => {
  const room = useContext(RoomContext);
  const dispatch = useContext(RoomDispatchContext);
  const userDispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAllMessages(room!.room.id)
      .then((data) => {
        if (data == null) {
          return;
        }
        dispatch!({ type: "setMessages", payload: data });
      })
      .catch(() => {
        userDispatch({ payload: undefined, type: "user/resetUser" });
        navigate("/auth/login");
      });
  }, [room?.room]);
};
