import type { ApiResponse } from '@/api/Api.types';
import { Api } from '@/api/AxiosInstance';
import {
  doTrainingData,
  startTrainingData,
  claimQuestData,
  claimStarData,
  finishTrainingData,
} from '@/services/Trainings/Trainings.types';

export const StartTrainingService = async (
  training_id: string,
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const response = await Api.post({ training_id, user_id, user_session_id, ...startTrainingData });

  return response;
};

export const DoTrainingService = async (
  training_quest_id: string,
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const response = await Api.post({
    training_quest_id,
    user_id,
    user_session_id,
    ...doTrainingData,
  });

  return response;
};

export const ClaimTrainingService = async (
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const response = await Api.post({ user_id, user_session_id, ...claimQuestData });

  return response;
};

export const ClaimTrainingStarService = async (
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const response = await Api.post({ user_id, user_session_id, ...claimStarData });

  return response;
};

export const FinishTrainingService = async (
  user_id: string,
  user_session_id: string,
): Promise<ApiResponse> => {
  const response = await Api.post({ user_id, user_session_id, ...finishTrainingData });

  return response;
};
