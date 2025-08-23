import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/models/User';

export const useUserStore = defineStore('userstore', () => {
  const user: Ref<User | null> = ref(null);

  const SET_USER = (newUser: User): void => {
    user.value = newUser;
  };

  const GET_USER_ID = (): string => {
    if (!user.value) return '';
    return user.value.id.toString();
  };

  const GET_USER_SESSION_ID = (): string => {
    if (!user.value) return '';
    return user.value.session_id;
  };

  return { user, SET_USER, GET_USER_ID, GET_USER_SESSION_ID };
});
