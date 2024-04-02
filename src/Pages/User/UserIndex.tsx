import { ContactsContext } from "../../Context/Contacts.context";
import { ContactRequestsButton } from "./Components/ContactRequestsButton";
import { SearchBar } from "./Components/SearchBar";
import { UserListItem } from "./Components/UserListItem";
import style from "./userIndex.module.css";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const UserIndex = () => {
  const { users, getUsers } = useFetchUsers();
  const sendFilter = (username: string) => {
    getUsers(username, 10, 0);
  };

  return (
    <ContactsContext.Provider value={{ pu: users, sendFilter }}>
      <div className={style.container}>
        <main className={style["users-container"]}>
          <div>
            <h2>Users</h2>
            <SearchBar />
          </div>
          <div>
            <h2>Requests</h2>
            <section className={style.requests}>
              <ContactRequestsButton buttonType="received" />
              <ContactRequestsButton buttonType="sended" />
            </section>
          </div>
        </main>
        <section className={style["users-list"]}>
          <h2>Info</h2>
          {users.data.length ? (
            users.data.map((user, id) => {
              return <UserListItem key={`user-${id}`} user={user} />;
            })
          ) : (
            <p>Nobody is avaliable to be contacted</p>
          )}
        </section>
      </div>
    </ContactsContext.Provider>
  );
};
