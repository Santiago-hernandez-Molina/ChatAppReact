import { FormEventHandler } from "react";
import { ButtonType } from "../../../../Shared/Enums/ButtonType";
import { useField } from "../../../../Shared/Hooks/useForm";
import { Button } from "../../../../Shared/Styled/Button";
import style from "./inputmessage.module.css";

type Props = {
  sendMessage: (message: string) => void;
};
export const InputMessage = ({ sendMessage }: Props) => {
  const { value, onChange, reset, type } = useField("text");

  const handleMessage: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    sendMessage(value.toString());
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleMessage}
        className={style["input-bar"]}
        action="post"
      >
        <input {...{ type, onChange, value }} />
        <Button $type={ButtonType.secondary} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};
