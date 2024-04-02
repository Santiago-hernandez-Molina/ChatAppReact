import { useSelector } from "react-redux";
import style from "./Home.module.css";
import { RootState } from "../../Store/Store";
import { User } from "../../Models/User.model";
import { HomePrivate } from "./Views/HomePrivate";
import { HomePublic } from "./Views/HomePublic";

export const HomeIndex = () => {
  const user: User = useSelector((state: RootState) => state.user);
  return (
    <div className={style.container}>
      {user.authorized ? <HomePrivate /> : <HomePublic />}
    </div>
  );
};
