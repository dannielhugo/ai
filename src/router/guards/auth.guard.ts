import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

export function isAuthenticated(to: any) {
  const userStore = useUserStore();
  const { isLoggedIn } = storeToRefs(userStore);

  if (!isLoggedIn.value) {
    return { name: 'login' };
  }
  return;
}
