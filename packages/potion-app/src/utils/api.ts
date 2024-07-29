import axios, { AxiosInstance } from "axios";

class ApiClient {
  private static instance: ApiClient;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:58300/api",
    });
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public getApi(): AxiosInstance {
    return this.api;
  }
}

export const api = ApiClient.getInstance().getApi();
