import { AxiosHeaders, AxiosRequestConfig } from "axios";
import { PaginatedUsers } from "../../../Models/User.model";
import { chatApi } from "../../../Api/Api.service";

export async function getUsersByUsername(
  username: string,
  limit: number,
  offset: number,
): Promise<PaginatedUsers | null> {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: headers,
  };

  return chatApi
    .get(
      `/v1/user/find?username=${username}&limit=${limit}&offset=${offset}`,
      config,
    )
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error("Couldn't send request (Try later)");
    });
}
