import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "../../../Router/guards";

export const RoomRoutes: RouteObject = {
  path: "rooms",
  children: [
    {
      id: "RoomIndex",
      path: "",
      async lazy() {
        let { RoomIndex } = await import("../RoomIndex.tsx");
        return { Component: PrivateRoute(RoomIndex) };
      },
    },
    {
      id: "RoomShow",
      path: ":id",
      async lazy() {
        let { RoomShow } = await import("../RoomShow.tsx");
        return { Component: PrivateRoute(RoomShow) };
      },
    },
  ],
};
