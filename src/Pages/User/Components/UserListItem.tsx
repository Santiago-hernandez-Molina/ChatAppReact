import { useSelector } from "react-redux";
import { Contact, User } from "../../../Models/User.model";
import { ButtonType } from "../../../Shared/Enums/ButtonType";
import { Button } from "../../../Shared/Styled/Button";
import style from "./userListItem.module.css";
import { RootState } from "../../../Store/Store";
import { useSendRequest } from "../hooks/useSendRequest";
import { useContext } from "react";
import { ContactsContext } from "../../../Context/Contacts.context";

type Props = {
  user: Contact;
};

export const UserListItem = ({ user }: Props) => {
  const localUser: User = useSelector((state: RootState) => state.user);
  const { isLoading, sendRequest } = useSendRequest();
  const context = useContext(ContactsContext);

  return localUser.id != user.id && !user.isContact ? (
    <div className={style["list-item"]}>
      <p>{user.username}</p>
      <p>{user.email}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.actions}>
          <Button
            onClick={() => {
              sendRequest(user.id)
              context?.sendFilter("");
            }}
            $type={ButtonType.secondary}
          >
            Add
          </Button>
          <Button $type={ButtonType.primary}>View</Button>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
