<template>
  <component :is="'script'" src="https://accounts.google.com/gsi/client" @load="initSignIn" async />
  <div id="gSignInButton" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const loginCallback = async (response: any) => {
  // send response to your own server endpoint
  // and redirect user
  console.log(response);
};

const initSignIn = () => {
  window.google.accounts.id.initialize({
    client_id: "739951848410-ukgk730iphfjho6dsgece8l0a2ia555d.apps.googleusercontent.com",
    callback: loginCallback
  });

  window.google.accounts.id.renderButton(
    document.getElementById("gSignInButton"),
    { type: "standard", text: "sign_in_with", theme: "outline",
      size: "large", width: "400" }
  );
  window.google.accounts.id.prompt();
};

onMounted(() => {
  if (typeof window.google !== 'undefined') {
    initSignIn();
  }
});
</script>