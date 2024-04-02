import { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import { chatApi } from "../../../Api/Api.service";

export async function acceptRequest(requestId: number) {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");
  const config: AxiosRequestConfig = {
    method: "post",
    url: `/v1/contact/accept/${requestId}`,
    headers,
    withCredentials: true,
  };
  chatApi
    .request(config)
    .then((res: AxiosResponse) => res.status)
    .catch(() => {
      throw new Error("Couldn't send request (Try later)");
    });
}
