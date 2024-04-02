import { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import { Room } from "../../../Models/Room.model";
import { chatApi } from "../../../Api/Api.service";

export async function getRoom(id: number): Promise<Room | null> {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: headers,
  };

  return chatApi
    .get(`/v1/room/show/${id}`, config)
    .then((response) => response.data)
    .catch((err: AxiosError) => {
      if (err.response?.status === 403) {
        throw new Error("you are not allowed to see this room");
      }
      throw new Error("Couldn't send request (Try later)");
    });
}
