import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { DuelCharacter } from '@/models/DuelCharacter';
import { useFightsService } from '@/composable/useFightsService';

export const useFightsStore = defineStore('fightsStore', () => {
  const { getDuelOpponents, startDual, claimDuelRewards, checkForDuelComplete } =
    useFightsService();
  const opponents: Ref<DuelCharacter[] | null> = ref(null);

  const SET_OPONENTS = (newOponents: DuelCharacter[]) => {
    opponents.value = newOponents;
  };

  const findBestDuel = (): number => {
    if (!opponents.value) return 0;
    let theBest = opponents.value[0].total_stats;
    let id = opponents.value[0].id;
    opponents.value.forEach((el) => {
      if (el.total_stats < theBest) {
        theBest = el.total_stats;
        id = el.id;
      }
    });
    return id;
  };

  const loadOponentsAction = async () => {
    const { data, error } = await getDuelOpponents();
    if (error) return;

    SET_OPONENTS(data.opponents);
  };

  const startDualAction = async () => {
    const theBestOpponent = findBestDuel();
    await startDual(theBestOpponent.toString());
  };

  const checkForDuelCompleteAction = async () => {
    await checkForDuelComplete();
  };

  const claimDuelRewardsAction = async () => {
    await claimDuelRewards();
  };

  return {
    opponents,
    SET_OPONENTS,
    findBestDuel,
    startDualAction,
    loadOponentsAction,
    claimDuelRewardsAction,
    checkForDuelCompleteAction,
  };
});
