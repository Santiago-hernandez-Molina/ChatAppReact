import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Models/User.model";

const initial: User = {
  id: 0,
  username: "",
  email: "",
  authorized: false,
};

const getLocalStorageUser = () => {
  const userString = localStorage.getItem("user");

  if (userString != null) {
    return JSON.parse(userString);
  }
  return null;
};

const setLocalStoreUser = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const userSlice = createSlice({
  name: "user",
  initialState: getLocalStorageUser() ?? initial,
  reducers: {
    setUser: (_, value: PayloadAction<User>) => {
      setLocalStoreUser(value.payload);
      return value.payload;
    },
    resetUser: () => {
      setLocalStoreUser(initial);
      return initial;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
