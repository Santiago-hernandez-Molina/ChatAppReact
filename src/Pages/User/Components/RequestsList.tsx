import { useContext } from "react";
import { ContactRequest } from "../../../Models/ContactRquest.model";
import { ButtonType } from "../../../Shared/Enums/ButtonType";
import { useFetch } from "../../../Shared/Hooks/useFetch";
import { Button } from "../../../Shared/Styled/Button";
import { capitalize } from "../../../Shared/Utils/Capitalize";
import { acceptRequest } from "../Services/AcceptRequest";
import style from "./requestList.module.css";
import { ContactsContext } from "../../../Context/Contacts.context";

type Props = {
  closeModal: () => void;
  type: "sended" | "received";
};

export const RequestsList = ({ closeModal, type }: Props) => {
  const data: ContactRequest[] = useFetch({
    method: "get",
    url: `/v1/contact/find/${type}`,
    data: [],
  });
  const context = useContext(ContactsContext);

  return (
    <div className={style.modal}>
      <section className={style["modal-content"]}>
        <div className={style["modal-header"]}>
          <h3>{capitalize(type)} Requests</h3>
          <Button onClick={closeModal} $type={ButtonType.danger}>
            Close
          </Button>
        </div>
        {data.map((contact, id) => {
          return (
            <div
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "space-evenly",
                background: "var(--c-mid-green)",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{contact.user.username}</p>
              {type == "received" ? (
                <Button
                  onClick={() => {
                    acceptRequest(contact.id).then(
                      () => context?.sendFilter(""),
                    );
                  }}
                  style={{ height: "30px" }}
                  $type={ButtonType.secondary}
                >
                  Accept
                </Button>
              ) : (
                <Button style={{ height: "30px" }} $type={ButtonType.secondary}>
                  Cancel
                </Button>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
