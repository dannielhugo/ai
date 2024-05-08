<template>
  <div class="login-page">
    <h1>Login</h1>
    <LoginForm @login="loginHandler"/>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);
const router = useRouter();

function loginHandler(username: string, password: string) {
  userStore.login(username, password);
}

watchEffect(() => {
  if (isLoggedIn.value) {
    router.replace('/dashboard');
  }
});
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>