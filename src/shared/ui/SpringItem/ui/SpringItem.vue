<script setup lang='ts'>
import man from '@assets/icons/man.svg'
interface Props {
  image?: string
  name: string
  time: number
  distance: number
}

const props = defineProps<Props>()
</script>
<template lang='html'>
  <div class="w-[95%] mx-auto mt-3 h-12 flex justify-between px-5 py-2 shadow-md items-center bg-gray-light/40 rounded-md">
    <div class="flex gap-5 items-center">
      <a-image
      :width="40"
      :height="40"
      class="object-cover"
      src="https://www.zhukgsn.ru/wp-content/uploads/2023/02/rodnik.jpg"
    />
    <p>{{props.name}}</p>
    </div>
  <div class="flex gap-1 items-center">
    <img :src="man" alt="" />
    <span class=" text-xs text-gray">{{`${props.time} мин`}}</span>
    <span class=" text-gray">·</span>
    <span class=" text-xs text-gray">{{`${props.distance} км`}}</span>
  </div>
  </div>
</template>
<style lang='scss'>
    
</style>