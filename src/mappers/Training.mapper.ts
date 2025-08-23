import type { TrainingReward, Training, TrainingQuestion } from '@/models/Training';

type ResponseTrainings = {
  id: number;
  character_id: number;
  setting: string;
  status: number;
  training_cost: number;
  energy: number;
  needed_energy: number;
  stat_type: number;
  duration: number;
  ts_end: number;
  training_quest_id: number;
  training_quest_pool: string;
  claimed_stars: number;
  rewards_star_1: string;
  rewards_star_2: string;
  rewards_star_3: string;
  stat_points_star_1: number;
  stat_points_star_2: number;
  stat_points_star_3: number;
};

export type TrainingQuestionResponse = {
  id: number;
  character_id: number;
  training_id: number;
  identifier: string;
  type: number;
  stat: number;
  status: number;
  ts_complete: number;
  energy_cost: number;
  fight_difficulty: number;
  fight_npc_identifier: string;
  fight_battle_id: number;
  won: boolean;
  rewards: string;
};

export const MapTrainings = (trainings: ResponseTrainings): Training => {
  return {
    ...trainings,
    rewards_star_1: JSON.parse(trainings.rewards_star_1) as TrainingReward,
    rewards_star_2: JSON.parse(trainings.rewards_star_2) as TrainingReward,
    rewards_star_3: JSON.parse(trainings.rewards_star_3) as TrainingReward,
  };
};

export const MapTrainingQuestion = (
  trainingQuestion: TrainingQuestionResponse,
): TrainingQuestion => {
  return {
    ...trainingQuestion,
    rewards: JSON.parse(trainingQuestion.rewards),
  };
};
