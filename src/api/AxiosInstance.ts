import axios from 'axios';
import qs from 'qs';
import { HEADERS, STATIC_DATA, URL, type ApiResponse } from '@/api/Api.types';

class AxiosInstance {
  private readonly axiosObject;

  constructor() {
    this.axiosObject = axios.create({ withCredentials: true });
  }

  public async post(data: object): Promise<ApiResponse> {
    const response = await this.axiosObject.post(URL, qs.stringify({ ...STATIC_DATA, ...data }), {
      headers: HEADERS,
    });
    return response.data;
  }
}

export const Api = new AxiosInstance();
