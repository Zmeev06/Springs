<script setup lang='ts'>
import { LoginForm, RegistrationForm } from '@features/Auth';
import { useLoginStore } from '@shared/model/store/LoginStore';

const store = useLoginStore()
</script>
<template lang='html'>
  <a-card
  class="w-fit"
  header-color="#122147"
  :headStyle="{
    background: '#122147',
  }"
>
  <template #cover>
    <div class="px-6 pt-6 pb-3">
      <LoginForm v-if="store.status === 'login'"/>
      <RegistrationForm v-else-if="store.status === 'reg'" />
    </div>
  </template>
  <template #title>
    <h2 class=" text-[#FFF] text-2xl">{{store.status === 'login' ? 'Вход' : 'Регистрация'}}</h2>
  </template>
</a-card>
<div v-if="store.status === 'login'">
  <p>Нет аккаунта? <span class="text-blue cursor-pointer hover:text-blue/60 duration-300" @click="store.setValues('reg')">Зарегистрироваться</span></p>
</div>
<div v-else-if="store.status === 'reg'">
  <p>Уже зарегистрированы? <span class="text-blue cursor-pointer hover:text-blue/60 duration-300" @click="store.setValues('login')">Войти</span></p>
</div>

</template>
<style lang='scss'>
    
</style>