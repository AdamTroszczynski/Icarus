<template>
  <input type="email" placeholder="Email" v-model="email" />
  <input type="password" placeholder="Password" v-model="password" />
  <button @click="loginAction">Login</button>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useAuth } from '@/composable/useAuth';

const { login, autoLogin } = useAuth();

const email: Ref<string> = ref('vmvdnkuvzejcznuila@nespf.com');
const password: Ref<string> = ref('vmvdnkuvzejcznuila@nespf.com');

const loginAction = async () => {
  await login(email.value, password.value);
};

onMounted(() => {
  autoLogin();
});
</script>
