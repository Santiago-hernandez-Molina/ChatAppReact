import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "../../../Router/guards";

export const UserRoutes: RouteObject = {
  path: "users",
  children: [
    {
      id: "UserIndex",
      path: "",
      async lazy() {
        let { UserIndex } = await import("../UserIndex.tsx");
        return { Component: PrivateRoute(UserIndex) };
      },
    },
    {
      id: "UserShow",
      path: ":id",
      async lazy() {
        let { UserShow } = await import("../UserShow.tsx");
        return { Component: PrivateRoute(UserShow) };
      },
    },
  ],
};
