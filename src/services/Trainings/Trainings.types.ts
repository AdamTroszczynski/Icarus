import { ActionsEnum } from '@/enums/ActionsEnum';
import { AuthEnum } from '@/enums/AuthEnum';

export const startTrainingData = {
  refresh_trainings: true,
  action: ActionsEnum.START_TRAINING,
  auth: AuthEnum.startTraining,
};

export const doTrainingData = {
  training_ids: 0,
  action: ActionsEnum.START_TRAINING_QUEST,
  auth: AuthEnum.startTrainingQuest,
};

export const claimQuestData = {
  action: ActionsEnum.CLAIM_TRAINING_QUEST_REWARD,
  auth: AuthEnum.claimTrainingQuestRewards,
};

export const claimStarData = {
  discard_item: false,
  action: ActionsEnum.CLAIM_TRAINING_STAR,
  auth: AuthEnum.claimTrainingStar,
};

export const finishTrainingData = {
  action: ActionsEnum.FINISH_TRAINING,
  auth: AuthEnum.finishTraining,
};
