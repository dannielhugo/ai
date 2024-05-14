import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/user';

interface UserState {
  user: User | null;
  isLoggedIn: boolean;

}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    login(username: string, password: string) {
      this.isLoggedIn = true;
    }
  }
});

export type UserStore = ReturnType<typeof useUserStore>;