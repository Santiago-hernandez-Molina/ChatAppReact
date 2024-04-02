import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { User } from "../../../Models/User.model";
import { resetUser } from "../../../Store/Slices/UserSlice";

type NavItem = {
  path: string;
  name: string;
};

export const NavbarComponent = () => {
  const dispatch = useDispatch();
  const user: User = useSelector((state: RootState) => state.user);

  const privateRoutes: NavItem[] = [
    { path: `/users`, name: "Users" },
    { path: "/rooms", name: "Rooms" },
    { path: `/users/${user.id}`, name: "Profile" },
  ];

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h3>ChatApp</h3>
      </Link>
      <ul className={styles.nav}>
        {/* NavItem according to user status*/}
        {!user.authorized ? (
          <li>
            <Link to="/auth/login" replace>
              Log-in
            </Link>
          </li>
        ) : (
          <>
            {privateRoutes.map((route) => {
              return (
                <li key={route.name}>
                  <Link to={route.path} replace>
                    {route.name}
                  </Link>
                </li>
              );
            })}
            <li>
			<Link to="/" onClick={() => dispatch(resetUser())} style={{color: "var(--c-red)"}} replace>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
