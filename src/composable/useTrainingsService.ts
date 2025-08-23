import {
  ClaimTrainingService,
  ClaimTrainingStarService,
  DoTrainingService,
  FinishTrainingService,
  StartTrainingService,
} from '@/services/Trainings/Trainings';
import { useUserStore } from '@/stores/UserStore';

export const useTrainingsService = () => {
  const userStore = useUserStore();

  const startTraining = async (trainingId: string) => {
    return await StartTrainingService(
      trainingId,
      userStore.GET_USER_ID(),
      userStore.GET_USER_SESSION_ID(),
    );
  };

  const doTraining = async (trainingQuestId: string) => {
    return await DoTrainingService(
      trainingQuestId,
      userStore.GET_USER_ID(),
      userStore.GET_USER_SESSION_ID(),
    );
  };

  const claimTraining = async () => {
    return await ClaimTrainingService(userStore.GET_USER_ID(), userStore.GET_USER_SESSION_ID());
  };

  const claimTrainingStarService = async () => {
    return await ClaimTrainingStarService(userStore.GET_USER_ID(), userStore.GET_USER_SESSION_ID());
  };

  const finishTraining = async () => {
    return await FinishTrainingService(userStore.GET_USER_ID(), userStore.GET_USER_SESSION_ID());
  };

  return { startTraining, doTraining, claimTraining, claimTrainingStarService, finishTraining };
};
