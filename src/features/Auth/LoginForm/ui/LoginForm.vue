<script setup lang='ts'>
import { ref } from 'vue';

interface FormState {
  email: string;
  password: string;
}

const formState = ref<FormState>({
  email: "",
  password: "",
});
</script>
<template lang='html'>
  <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    class="flex flex-col items-center w-full"
  >
    <a-form-item
      name="email"
      :rules="[{ required: true, message: 'Введите логин' }]"
      class="w-fit mx-auto"
    >
      <a-input
        v-model:value="formState.email"
        placeholder="Логин"
        class="w-[300px]"
      />
    </a-form-item>

    <a-form-item
      name="password"
      :rules="[{ required: true, message: 'Введите пароль' }]"
      class="w-fit mx-auto"
    >
      <a-input-password
        v-model:value="formState.password"
        placeholder="Пароль"
        class="w-[300px]"
      />
    </a-form-item>

    <a-form-item class="w-full">
      <a-button type="primary" ghost style="width: 100%"
        >Вход</a-button
      >
    </a-form-item>
  </a-form>
</template>
<style lang='scss'>
    
</style>