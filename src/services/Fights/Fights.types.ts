import { ActionsEnum } from '@/enums/ActionsEnum';
import { AuthEnum } from '@/enums/AuthEnum';

export const getDuelOpponentsData = {
  action: ActionsEnum.GET_DUEL_OPPONENTS,
  auth: AuthEnum.getDuelOpponents,
};

export const startDuelData = {
  use_premium: false,
  refresh_opponents: true,
  server_id: 'pl35',
  action: ActionsEnum.START_DUEL,
  auth: AuthEnum.startDuel,
};

export const claimDuelRewardsData = {
  discard_item: false,
  refresh_inventory: true,
  action: ActionsEnum.CLAIM_DUEL_REWARDS,
  auth: AuthEnum.claimDuelRewards,
};

export const checkForDuelCompleteData = {
  action: ActionsEnum.CHECK_FOR_DUEL_COMPLETE,
  auth: AuthEnum.checkForDuelComplete,
};
