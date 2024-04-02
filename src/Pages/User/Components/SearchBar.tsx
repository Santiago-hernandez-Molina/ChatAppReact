import { FormEvent, useContext } from "react";
import { ButtonType } from "../../../Shared/Enums/ButtonType";
import { Button } from "../../../Shared/Styled/Button";
import { useField } from "../../../Shared/Hooks/useForm";
import style from "./inputBar.module.css";
import { ContactsContext } from "../../../Context/Contacts.context";

export const SearchBar = () => {
  const { reset, ...searchField } = useField("text");
  const context = useContext(ContactsContext);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    context?.sendFilter(searchField.value as string);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="post"
      style={{ display: "flex", gap: "5px" }}
    >
      <label className={style["label-search"]} htmlFor="search">
        Find By Username
      </label>
      <input {...searchField} className={style["input-bar"]} id="search" />
      <Button $type={ButtonType.secondary} type="submit">
        Find
      </Button>
    </form>
  );
};
