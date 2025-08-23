export type TrainingReward = {
  coins?: number;
  xp?: number;
  item?: number;
  statPoints?: number;
};

export type Training = {
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
  rewards_star_1: TrainingReward;
  rewards_star_2: TrainingReward;
  rewards_star_3: TrainingReward;
  stat_points_star_1: number;
  stat_points_star_2: number;
  stat_points_star_3: number;
};

export type TrainingQuestion = {
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
  rewards: {
    training_progress: number;
    coins: number;
    xp: number;
  };
};
