import { useEffect, useState } from "react";
import { getAllRooms } from "../Services/GetAllRooms";
import { Room } from "../../../Models/Room.model";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const useFetchRooms = () => {
  const initialRooms: Room[] = [];
  const [rooms, setRooms] = useState(initialRooms);
  const navigate = useNavigate();
  const userDispatch = useDispatch();

  useEffect(() => {
    getAllRooms()
      .then((data) => {
        if (data == null) {
          return;
        }
        setRooms(data);
      })
      .catch(() => {
        userDispatch({ payload: undefined, type: "user/resetUser" });
        navigate("/auth/login");
      });
  }, []);
  return rooms;
};
