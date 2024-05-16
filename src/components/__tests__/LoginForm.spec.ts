import { mount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';
import { describe, expect, test } from 'vitest';

describe('LoginForm.vue', () => {
  test('emits a login event with username and password on form submit', async () => {
    const wrapper = mount(LoginForm);
    const usernameInput = wrapper.find('[data-testid="username"]').find('input');
    const passwordInput = wrapper.find('[data-testid="password"]').find('input');
    const form = wrapper.find('[data-testid="loginForm"]');

    // Set the username and password values
    await usernameInput.setValue('johndoe');
    await passwordInput.setValue('password123');

    // Trigger the form submit event
    await form.trigger('submit.prevent');

    // Assert that the login event was emitted with the correct username and password
    expect(wrapper.emitted('login')).toEqual([['johndoe', 'password123']]);
  });
});