import type { ApiResponse } from '@/api/Api.types';
import { Api } from '@/api/AxiosInstance';
import { loginData, autoLoginData } from '@/services/Auth/Auth.types';

export const LoginService = async (email: string, password: string): Promise<ApiResponse> => {
  const response = await Api.post({ email, password, ...loginData });
  return response;
};

export const AutoLoginService = async (
  existing_session_id: string,
  existing_user_id: string,
): Promise<ApiResponse> => {
  const response = await Api.post({ existing_session_id, existing_user_id, ...autoLoginData });
  return response;
};
