<script setup lang='ts'>
interface Props {
  searchValue: string
}

interface Emit {
  (emit: 'update:searchValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
</script>
<template lang='html'>
  <div class="relative w-4/5 mx-auto">
    <a-input :value="props.searchValue" @input="(e:any) => emit('update:searchValue', e.target.value)" placeholder="Поиск" />
    <i class="pi pi-search text-gray absolute duration-300 top-1/4 right-2" />
  </div>
</template>
<style lang='scss'>
    
</style>