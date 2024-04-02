import { useState } from "react";
import { ButtonType } from "../../../Shared/Enums/ButtonType";
import { Button } from "../../../Shared/Styled/Button";
import { RequestsList } from "./RequestsList";

type Props = {
  buttonType: "received" | "sended";
};
export const ContactRequestsButton = ({ buttonType }: Props) => {
  const [isActive, setActive] = useState(false);
  const properties = {
    $type: ButtonType.danger,
  };
  if (buttonType === "sended") {
    properties.$type = ButtonType.secondary;
  }
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Button onClick={handleClick} $type={properties.$type}>
        {buttonType}
      </Button>
      {isActive ? (
        <RequestsList type={buttonType} closeModal={handleClick} />
      ) : (
        <></>
      )}
    </>
  );
};
