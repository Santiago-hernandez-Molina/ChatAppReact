import { Outlet } from "react-router-dom";
import "./app.style.css";
import { NavbarComponent } from "./Shared/Components/Navbar/NavbarComponent";

export const ChatApp = () => {
  return (
    <div className="container-app">
      <NavbarComponent />
	  <Outlet />
    </div>
  );
};
