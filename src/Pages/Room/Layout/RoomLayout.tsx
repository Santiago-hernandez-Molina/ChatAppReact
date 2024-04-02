import { ReactNode } from "react";
import style from "./roomLayout.module.css";

type Props = {
  children: ReactNode;
};
export const RoomLayout = ({ children }: Props) => {
  return <div className={style["room-layout"]}>{children}</div>;
};
