import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const status = ref<'login' | 'reg'>('login')

  const setValues = (value: 'login' | 'reg') => {
    status.value = value
  };

  return { status, setValues };
});
