<script setup lang='ts'>
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>
<template lang='html'>
  <div>
    <p class="text-sm">{{props.text}}</p>
  </div>
</template>
<style lang='scss'>
    
</style>