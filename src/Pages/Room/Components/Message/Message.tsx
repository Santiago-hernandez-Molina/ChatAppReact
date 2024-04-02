import style from "./message.module.css";
import { useSelector } from "react-redux";
import { User } from "../../../../Models/User.model";
import { RootState } from "../../../../Store/Store";
import { Message } from "../../../../Models/Message.model";

type Props = {
  message: Message;
};

export const MessageComponent = ({ message }: Props) => {
  const user: User = useSelector((state: RootState) => state.user);

  return (
    <div
      className={`${style.message} ${
        message.user?.id == user.id ? style["message-owner"] : ""
      }`}
    >
      {message.content}
      <div
        className={
          message.user?.id == user.id
            ? style["message-name-owner"]
            : style["message-name"]
        }
      >
        {message.user?.username}
      </div>
    </div>
  );
};
