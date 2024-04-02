import { useEffect, useState } from "react";
import { chatApi } from "../../Api/Api.service";
import { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";

type Props<T> = {
  method: string;
  url: string;
  data: T[];
};

export function useFetch<T>({ method, url, data }: Props<T>) {
  const [resData, setData] = useState<T[]>(data);

  useEffect(() => {
    const headers: AxiosHeaders = new AxiosHeaders();
    headers.setContentType("application/json");
    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      withCredentials: true,
    };

    chatApi
      .request(config)
      .then((res: AxiosResponse) => {
        setData(res.data);
      })
      .catch(() => {
        throw new Error("Couldn't send request (Try later)");
      });
  }, []);

  return resData;
}
