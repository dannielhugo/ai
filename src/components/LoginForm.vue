<template>
  <form @submit.prevent="submit" class="login" data-testid="loginForm">
    <FloatLabel class="login__float">
      <InputText id="username" data-testid="username" v-model="username" />
      <label for="username">Usuário</label>
    </FloatLabel>
    <FloatLabel class="login__float">
      <Password inputId="password" data-testid="password" v-model="password" toggleMask/>
      <label for="password">Senha</label>
    </FloatLabel>
    
    <Button label="Submit" data-testid="submit" type="submit"/>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const emit = defineEmits<{
  login: [u: string, p: string];
}>();

function submit() {
  return emit('login', username.value, password.value);
}
</script>

<style lang="scss" scoped>
.login {
  &__float {
    margin-bottom: 1rem;
  }
}

h1 {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
