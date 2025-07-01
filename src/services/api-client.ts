import axios, { type AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07633806089f4396b03ec8231265b6b5",
  },
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
