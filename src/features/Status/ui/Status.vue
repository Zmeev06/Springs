<script setup lang='ts'>
interface Props {
  status?: 'Very bad' | "Bad" | 'Medium' | 'Good' | 'Very good'
}

const props = defineProps<Props>()
</script>
<template lang='html'>
  <div class="flex items-center justify-between w-full mt-5 px-4">
    <p class="mb-3 tablet:text-xl">Состояние</p>
    <div class="relative">
      <i class="pi pi-caret-down text-orange absolute top-[-20px] shadow-xl shadow-orange text-lg left-0" :class="props.status === 'Very bad' ? 'left-0' : props.status === 'Bad' ? 'left-10' : props.status === 'Medium' ? 'left-20' : props.status === 'Good' ? 'left-28' : 'left-[150px]' "/>
      <div class="bg-gradient-to-r from-[#ff6767] to-blue h-9 w-40 rounded-md">
      </div>
      <div class="flex justify-between">
        <span class="text-gray text-xs">плохо</span>
        <span class="text-gray text-xs">хорошо</span>
      </div>
    </div>
    

  </div>
</template>
<style lang='scss'>
    
</style>