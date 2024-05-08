import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref({});
  const isLoggedIn = ref(false);
  function login(username: string, password: string) {
    isLoggedIn.value = true;
  }

  return { login, user, isLoggedIn };
});
