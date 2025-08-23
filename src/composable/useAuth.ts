/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapTrainings } from '@/mappers/Training.mapper';
import type { User } from '@/models/User';
import { AutoLoginService, LoginService } from '@/services/Auth/Auth';
import { useUserStore } from '@/stores/UserStore';
import { useTrainingsStore } from '@/views/trainings/TrainingsStore';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const userStore = useUserStore();
  const trainingsStore = useTrainingsStore();

  const setResponseData = (response: any) => {
    const { user, trainings } = response;

    if (user) userStore.SET_USER(user as User);
    if (trainings) trainingsStore.SET_TRAININGS(trainings.map((el: any) => MapTrainings(el)));
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const response = await LoginService(email, password);

    if (response.error) return false;

    const { user } = response.data;
    Cookies.set(
      'hero_platform_data_standalone',
      `session_id=${user.session_id},user_id=${user.id},server_id=pl35`,
    );
    Cookies.set('hero_session_data', `session_id=${user.session_id},user_id=${user.id}`);
    localStorage.setItem('existing_session_id', user.session_id);
    localStorage.setItem('existing_user_id', user.id.toString());

    setResponseData(response.data);
    return true;
  };

  const autoLogin = async (): Promise<boolean> => {
    const existing_session_id = localStorage.getItem('existing_session_id') as string;
    const existing_user_id = localStorage.getItem('existing_user_id') as string;
    if (!existing_session_id || !existing_user_id) return false;

    const response = await AutoLoginService(existing_session_id, existing_user_id);
    if (response.error) return false;

    setResponseData(response.data);
    return true;
  };

  const logout = (): void => {
    localStorage.removeItem('existing_session_id');
    localStorage.removeItem('existing_user_id');
    Cookies.remove('hero_platform_data_standalone');
    Cookies.remove('hero_session_data');
  };

  return { login, autoLogin, logout };
};
