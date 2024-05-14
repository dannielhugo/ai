import { beforeEach, describe, expect, it, vi } from 'vitest';
import { isAuthenticated } from '@/router/guards/auth.guard';
import { createPinia, setActivePinia, storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

describe('isAuthenticated guard', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it('should redirect to login if user is not logged in', () => {
    const userStore = vi.fn();
    userStore.mockImplementation(() => ({
      isLoggedIn: storeToRefs(useUserStore()).isLoggedIn,
    }));

    const to = {};
    const result = isAuthenticated.call(userStore(), to);

    expect(result).toEqual({ name: 'login' });
  });

  it('should not redirect if user is logged in', () => {
    const userStore = vi.fn();
    userStore.mockImplementation(() => ({
      isLoggedIn: storeToRefs(useUserStore()).isLoggedIn,
    }));

    userStore().isLoggedIn.value = true;
    const to = {};
    const result = isAuthenticated.call(userStore(), to);

    expect(result).toBeUndefined();
  });
});