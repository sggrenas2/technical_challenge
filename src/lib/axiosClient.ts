import axios from "axios";

class AxiosClient extends axios.Axios {
  private token: string | null = null;
  protected axiosInstance: any;

  constructor(instanceConfig = {}) {
    super();
    this.axiosInstance = axios.create({
      ...instanceConfig,
    });

    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        const token = this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );

    this.get = this.axiosInstance.get.bind(this.axiosInstance);
    this.post = this.axiosInstance.post.bind(this.axiosInstance);
    this.put = this.axiosInstance.put.bind(this.axiosInstance);
    this.delete = this.axiosInstance.delete.bind(this.axiosInstance);
  }

  public getToken: () => string | null = () => {
    console.log("🚀 ~ getToken ~ token:", this.token);
    return this.token;
  };
  public setToken: (token: string) => void = (token) => {
    console.log("🚀 ~ getToken ~ token:", this.token);
    console.log("🚀 ~ AxiosClient ~ token:", token);
    this.token = token;
  };

  public clearToken: () => void = () => {
    this.token = null;
  };
}

export const client = new AxiosClient();
