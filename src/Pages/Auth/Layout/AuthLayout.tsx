import { ReactNode } from "react";
import style from "./authLayout.module.css";

type Props = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return <div className={style["auth-layout"]}>{children}</div>;
};
