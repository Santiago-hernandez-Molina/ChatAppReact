import { AxiosHeaders, AxiosRequestConfig } from "axios";
import { chatApi } from "../../../Api/Api.service";
import { ContactRequest } from "../../../Models/ContactRquest.model";

export const sendContactRequest = async (toUserId: number) => {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: headers,
  };

  const contactRequest: ContactRequest = {
    toUserId: toUserId,
    fromUserId: 0,
    Accepted: false,
  };

  try {
    const response = await chatApi.post(
      `/v1/contact/new`,
      contactRequest,
      config,
    );
    return response.data;
  } catch {
    throw new Error("Couldn't send request (Try later)");
  }
};
