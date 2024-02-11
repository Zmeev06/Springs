<script setup lang='ts'>
interface Props {
  text?: string
}

const props = defineProps<Props>()
</script>
<template lang='html'>
  <div class="w-full"> 
    <h2 class="text-lg ml-2">Описание</h2>
    <p class="text-sm tablet:text-md tablet:w-3/4 mx-auto mt-3">{{props.text ? props.text : 'Нет данных'}}</p>
  </div>
</template>
<style lang='scss'>
    
</style>