/* eslint-disable @typescript-eslint/no-explicit-any */
export type ApiResponse = {
  data: any;
  error: string;
};

export const URL = 'https://pl35.herozerogame.com/request.php';

export const HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: '*/*',
  'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
};

export const STATIC_DATA = {
  rct: '1',
  keep_active: 'true',
  device_type: 'web',
  build_number: '173',
  client_version: 'html5_244',
};
