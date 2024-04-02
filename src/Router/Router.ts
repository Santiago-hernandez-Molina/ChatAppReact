import { createBrowserRouter } from "react-router-dom";
import { RoomRoutes } from "../Pages/Room/Routes/Room.routes";
import { LoginRoutes } from "../Pages/Auth/Routes/Auth.routes";
import { ChatApp } from "../ChatApp";
import { HomeIndex } from "../Pages/Home/HomeIndex";
import { UserRoutes } from "../Pages/User/Routes/User.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ChatApp,
    children: [
      { id: "Home", path: "", Component: HomeIndex },
      RoomRoutes,
      LoginRoutes,
      UserRoutes,
    ],
  },
]);
