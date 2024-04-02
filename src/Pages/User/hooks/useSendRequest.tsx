import { useState } from "react";
import { sendContactRequest } from "../Services/SendContactRequest";

export const useSendRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = (userId: number) => {
    setIsLoading(true);
    sendContactRequest(userId)
      .then()
      .catch(() => console.log("Error"))
      .finally(() => setIsLoading(false));
  };
  return { isLoading, sendRequest };
};
