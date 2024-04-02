import { ReactNode } from "react";
import { User } from "../../Models/User.model";
import { store } from "../../Store/Store";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (children: () => ReactNode) => {
  const user: User = store.getState().user;

  if (!user.authorized) {
    return () => Navigate({ to: "/" });
  }

  return children;
};
