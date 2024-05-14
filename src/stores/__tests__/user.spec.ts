import { describe, test, expect, vi, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useUserStore, type UserStore } from '../user';

describe('useUserStore', () => {
  let store: UserStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useUserStore();
  });

  test('initial state', () => {
    expect(store.user).toEqual(null);
    expect(store.isLoggedIn).toBe(false);
  });

  test('login', () => {
    const loginSpy = vi.spyOn(store, 'login');

    store.login('johndoe', 'password123');

    expect(loginSpy).toHaveBeenCalledWith('johndoe', 'password123');
    expect(store.isLoggedIn).toBe(true);
  });
});