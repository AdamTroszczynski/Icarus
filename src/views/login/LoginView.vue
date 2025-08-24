<template>
  <section
    class="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-slate-800 to-zinc-800"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-center gap-2">
        <div class="bg-primary-gold flex items-center justify-center rounded-full p-6">
          <LogoIcon color="primary-dark" :width="25" :height="25" />
        </div>
        <h2 class="text-primary-gold font-roboto text-3xl font-bold">Icarus</h2>
      </div>
      <form
        @submit.prevent
        class="bg-primary-darkBlue border-primary-white/20 flex flex-col gap-4 rounded-2xl border p-7"
      >
        <MainInput type="email" id="email" name="email" placeholder="Wprowadź email">
          Email
        </MainInput>
        <MainInput type="password" name="password" id="password" placeholder="Wprowadź hasło">
          Hasło
        </MainInput>
        <MainInput type="password" name="code" id="code" placeholder="Wprowadź kod">
          Kod dostępu
        </MainInput>
        <MainButton @click="loginAction" bg-color="primary-gold" class="mt-4 font-semibold"
          >Zaloguj</MainButton
        >
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue';
import MainInput from '@/components/inputs/MainInput.vue';
import MainButton from '@/components/buttons/MainButton.vue';
import { useRouter } from 'vue-router';
import z from 'zod';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { useAuth } from '@/composable/useAuth';

const { login } = useAuth();
const router = useRouter();

const loginSchema = toTypedSchema(
  z.object({
    email: z.string('Pole wymagane'),
    password: z.string('Pole wymagane'),
    code: z
      .string('Pole wymagane')
      .refine((val) => val.includes('norki'), { message: 'Błędny kod' }),
  }),
);

const { values, validate, meta, setFieldError } = useForm({ validationSchema: loginSchema });

const loginAction = async () => {
  validate();
  if (meta.value.valid && values.email && values.password) {
    const isSuccess = await login(values.email, values.password);
    if (!isSuccess) {
      setFieldError('email', 'Błędne dane logowania');
      return;
    }
    router.push({ name: 'quests' });
  }
};
</script>
