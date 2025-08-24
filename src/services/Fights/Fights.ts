import { Api } from '@/api/AxiosInstance';
import {
  checkForDuelCompleteData,
  claimDuelRewardsData,
  getDuelOpponentsData,
  startDuelData,
} from './Fights.types';
import type { ApiResponse } from '@/api/Api.types';

export const getDuelOpponentsService = async (
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const request = await Api.post({ user_id, user_session_id, ...getDuelOpponentsData });

  return request;
};

export const startDualService = async (
  character_id: string,
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const request = await Api.post({ character_id, user_id, user_session_id, ...startDuelData });

  return request;
};

export const claimDuelRewardsService = async (
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const request = await Api.post({ user_id, user_session_id, ...claimDuelRewardsData });

  return request;
};

export const checkForDuelCompleteService = async (
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const request = await Api.post({ user_id, user_session_id, ...checkForDuelCompleteData });

  return request;
};
