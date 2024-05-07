<template>
  <form @submit.prevent="login" class="login">
    <FloatLabel class="login__float">
      <InputText id="username" v-model="username" />
      <label for="username">Usuário</label>
    </FloatLabel>
    <FloatLabel class="login__float">
      <Password id="password" v-model="password" />
      <label for="password">Senha</label>
    </FloatLabel>
    
    <Button label="Submit" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

function login() {
  // Your login logic here
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
