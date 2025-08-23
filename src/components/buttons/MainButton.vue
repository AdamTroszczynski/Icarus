<template>
  <button
    class="flex w-full cursor-pointer items-center justify-center rounded-xl p-2 duration-200 active:scale-95"
    :class="setBgColor"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BgColorMap, type Colors } from '@/const/Colors';
import { computed, type PropType } from 'vue';

const props = defineProps({
  bgColor: {
    type: String as PropType<Colors>,
    required: true,
  },
});

const setBgColor = computed<string>(() => {
  return BgColorMap[props.bgColor];
});
</script>
