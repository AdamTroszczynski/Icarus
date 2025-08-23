import { ActionsEnum } from '@/enums/ActionsEnum';
import { AuthEnum } from '@/enums/AuthEnum';

export const loginData = {
  platform: '',
  platform_user_id: '',
  client_id: 'pl351755875381',
  app_version: '244',
  user_id: 0,
  user_session_id: 0,
  device_info: {
    language: 'pl',
    pixelAspectRatio: 1,
    screenDPI: 72,
    screenResolutionX: 1920,
    screenResolutionY: 1080,
    touchscreenType: 0,
    os: 'HTML5',
    version: 'WEB 9,3,4,0',
  },
  device_id: 'web',
  action: ActionsEnum.LOGIN_USER,
  auth: AuthEnum.loginUser,
};

export const autoLoginData = {
  app_version: '244',
  client_id: 'pl351755875381',
  user_id: 0,
  user_session_id: 0,
  auth: AuthEnum.autoLoginUser,
  action: ActionsEnum.AUTO_LOGIN_USER,
};
