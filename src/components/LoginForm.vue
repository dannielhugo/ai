<template>
  <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
    <div class="text-subtitle-1 text-medium-emphasis">Login</div>

    <form @submit.prevent="submit" class="login" data-testid="loginForm">
      <v-text-field label="Usuário" data-testid="username" v-model="username"></v-text-field>

      <v-text-field
        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        hint="Mínimo 8 caracteres"
        label="Senha"
        data-testid="password"
        v-model="password"
        @click:append="show = !show"
      ></v-text-field>

      <v-btn data-testid="submit" type="submit">Submit</v-btn>
    </form>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const show = ref(false);

const rules = {
  required: (value: string) => !!value || 'Obrigatório.',
  min: (v: string) => v.length >= 8 || 'Mínimo 8 characteres',
  usernameMatch: () => 'Usuário e/ou senha inválidos'
};

const emit = defineEmits<{
  login: [u: string, p: string];
}>();

function submit() {
  return emit('login', username.value, password.value);
}
</script>

<style lang="scss" scoped></style>
