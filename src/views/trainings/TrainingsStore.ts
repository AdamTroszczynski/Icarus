import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Training, TrainingQuestion } from '@/models/Training';

export const useTrainingsStore = defineStore('trainingsstore', () => {
  const trainings: Ref<Training[] | null> = ref(null);
  const trainingQuests: Ref<TrainingQuestion[] | null> = ref(null);
  const neededEnergy: Ref<number> = ref(0);

  const SET_TRAININGS = (newTrainings: Training[]) => {
    trainings.value = newTrainings;
  };

  const SET_TRAINING_QUESTS = (newTrainingQuests: TrainingQuestion[]) => {
    trainingQuests.value = newTrainingQuests;
  };

  const findTheBestTraining = () => {
    let betterSum = -1;
    let betterId = -1;
    trainings.value?.forEach((el) => {
      const newSum =
        (el.stat_points_star_1 +
          el.stat_points_star_2 +
          el.stat_points_star_3 +
          (el.rewards_star_1.statPoints ?? 0) +
          (el.rewards_star_2.statPoints ?? 0) +
          (el.rewards_star_3.statPoints ?? 0)) /
        el.training_cost;
      if (newSum >= betterSum) {
        betterSum = newSum;
        betterId = el.id;
      }
    });
    neededEnergy.value = trainings.value?.find((el) => (el.id = betterId))?.needed_energy ?? 0;
    return betterId;
  };

  const findTheBestTrainingQuest = () => {
    let isWin = false;
    let betterSum = -1;
    let betterId = -1;
    trainingQuests.value?.forEach((el) => {
      if (isWin) return;
      const newSum = el.rewards.training_progress / el.energy_cost;
      if (neededEnergy.value - el.rewards.training_progress <= 0) {
        betterSum = newSum;
        betterId = el.id;
        isWin = true;
      } else if (newSum > betterSum) {
        betterSum = newSum;
        betterId = el.id;
      }
    });
    neededEnergy.value =
      neededEnergy.value -
      (trainingQuests.value?.find((el) => el.id === betterId)?.rewards.training_progress ?? 0);
    return betterId;
  };

  return {
    trainings,
    SET_TRAININGS,
    SET_TRAINING_QUESTS,
    findTheBestTraining,
    findTheBestTrainingQuest,
  };
});
