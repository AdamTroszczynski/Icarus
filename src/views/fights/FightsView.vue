<template>
  <button @click="startBot">Start Bot</button>
</template>

<script setup lang="ts">
import { useFightsStore } from './FightsStore';

const fightsStore = useFightsStore();

const startBot = async () => {
  await fightsStore.loadOponentsAction();
  await fightsStore.startDualAction();
  await fightsStore.checkForDuelCompleteAction();
  await fightsStore.claimDuelRewardsAction();

  setTimeout(startBot, 60000);
};
</script>
