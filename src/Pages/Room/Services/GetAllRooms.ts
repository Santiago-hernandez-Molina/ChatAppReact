import { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import { Room } from "../../../Models/Room.model";
import { chatApi } from "../../../Api/Api.service";

export async function getAllRooms(): Promise<Room[] | null> {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: headers,
  };

  return chatApi
    .get("/v1/room/find", config)
    .then((response) => response.data)
    .catch((err: AxiosError) => {
      if (err.response?.status === 401) {
        throw new Error("unauthorized");
      }
    });
}
