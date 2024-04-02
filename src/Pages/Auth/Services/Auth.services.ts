import { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import { LoginRequest, User } from "../../../Models/User.model";
import { chatApi } from "../../../Api/Api.service";

export async function login(user: LoginRequest): Promise<User | null> {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: headers,
  };

  return chatApi
    .post("/login", user, config)
    .then((response) => response.data)
    .catch((err: AxiosError) => {
      console.log(err.response?.status);
      if (err.response?.status === 401) {
        throw new Error("invalid crendentials");
      }
      throw new Error("Couldn't send request (Try later)");
    });
}
