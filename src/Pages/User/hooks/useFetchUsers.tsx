import { useEffect, useState } from "react";
import { getUsersByUsername } from "../Services/FindUsers";
import { PaginatedUsers } from "../../../Models/User.model";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useFetchUsers = () => {
  const userDispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState<PaginatedUsers>({
    limit: 10,
    offset: 0,
    count: 0,
    data: [],
  });
  const getUsers = (username: string, limit: number, offset: number) => {
    getUsersByUsername(username, limit, offset)
      .then((data) => {
        if (data == null) {
          return;
        }
        setUsers(data);
      })
      .catch(() => {
        userDispatch({ payload: undefined, type: "user/resetUser" });
        navigate("/auth/login");
      });
  };
  useEffect(() => {
    getUsers("", 10, 0);
  }, []);
  return { users, getUsers };
};
