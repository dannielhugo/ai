<template>
  <div class="login-page">
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue';
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>