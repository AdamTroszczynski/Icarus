import {
  checkForDuelCompleteService,
  claimDuelRewardsService,
  getDuelOpponentsService,
  startDualService,
} from '@/services/Fights/Fights';
import { useUserStore } from '@/stores/UserStore';

export const useFightsService = () => {
  const userStore = useUserStore();

  const getDuelOpponents = async () => {
    return await getDuelOpponentsService(userStore.GET_USER_ID(), userStore.GET_USER_SESSION_ID());
  };

  const startDual = async (characterId: string) => {
    return await startDualService(
      characterId,
      userStore.GET_USER_ID(),
      userStore.GET_USER_SESSION_ID(),
    );
  };

  const checkForDuelComplete = async () => {
    return await checkForDuelCompleteService(
      userStore.GET_USER_ID(),
      userStore.GET_USER_SESSION_ID(),
    );
  };

  const claimDuelRewards = async () => {
    return await claimDuelRewardsService(userStore.GET_USER_ID(), userStore.GET_USER_SESSION_ID());
  };

  return { getDuelOpponents, startDual, claimDuelRewards, checkForDuelComplete };
};
