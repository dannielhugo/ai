<template>
  <div class="login-page">
    <LoginForm @login="loginHandler"/>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

function loginHandler(username: string, password: string) {
  userStore.login(username, password);
}

userStore.$subscribe((_, state) => {
  if (state.isLoggedIn) {
    router.replace('/dashboard');
  }
});
</script>

<style lang="scss" scoped></style>