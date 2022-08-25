<template>
  <h1>Log in</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="enter email" v-model="email" />
    <input type="password" placeholder="enter password" v-model="password" />
    <button>Log in</button>
  </form>
</template>

<script>
import useLogin from "@composables/useLogin.js";
import { ref } from "vue";
export default {
  setup() {
    const { error, login } = useLogin();
    const email = ref("");
    const password = ref("");
    const handleSubmit = () => {
      console.log(email.value, password.value);
      // context.emit(@login)
    };
    return { email, password, error, login, handleSubmit };
  },
};
</script>

<style></style>
