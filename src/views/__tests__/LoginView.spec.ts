import { VueWrapper, mount } from '@vue/test-utils';
import { useUserStore, type UserStore } from '@/stores/user';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LoginForm from '@/components/LoginForm.vue';
import LoginView from '../LoginView.vue';
import { createTestingPinia } from '@pinia/testing';
import { useRouter } from 'vue-router';
import router from '@/router';

vi.mock('vue-router');

describe('LoginView.vue', () => {
  let wrapper: VueWrapper;
  let userStore: UserStore;

  vi.mocked(useRouter).mockReturnValue({
    ...router,
    replace: vi.fn()
  });

  beforeEach(() => {
    vi.mocked(useRouter().replace).mockReset();
  });

  beforeEach(() => {
    wrapper = mount(LoginView, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn(),
        })],
      }
    });
    userStore = useUserStore();
  });

  it('renders the login page', () => {
    expect(wrapper.find('h1').text()).toBe('Login');
    expect(wrapper.findComponent(LoginForm).exists()).toBe(true);
  });

  it('redirects to the dashboard page when the user is logged in', async () => {
    userStore.isLoggedIn = true;
    await wrapper.vm.$nextTick();
    expect(useRouter().replace).toHaveBeenCalledWith('/dashboard');
  });
});