import { AxiosHeaders, AxiosRequestConfig } from "axios";
import { chatApi } from "../../../Api/Api.service";
import { Message } from "../../../Models/Message.model";

export async function getAllMessages(
  roomId: number,
): Promise<Message[] | null> {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: headers,
  };

  return chatApi
    .get(`/v1/message/find/room/${roomId}`, config)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error("Couldn't send request (Try later)");
    });
}
