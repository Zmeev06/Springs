<script setup lang='ts'>
import man from '@assets/icons/man.svg'
import {getCurrentLocation, calculateDistance, calculateTime} from '../model'
import { ref, onMounted } from 'vue';
interface Props {
  image?: string
  name: string
  coords: any
}

const props = defineProps<Props>()
const distance = ref()
const time = ref()


async function calculateDistanceAndTime() {
  try {
    const userLocation = await getCurrentLocation();
    const lat1: number = userLocation.latitude;
    const lon1: number = userLocation.longitude;

    const [lat2, lon2] = props.coords;

    const distanceValue: number = calculateDistance(lat1, lon1, lat2, lon2);
    const durationValue: string = calculateTime(distanceValue);
    distance.value = { distanceValue };
    time.value = {durationValue}
  } catch (error) {
    console.error('Ошибка при получении текущего местоположения:', error);
  }
}

onMounted(() => {
  calculateDistanceAndTime()
})
</script>
<template lang='html'>
  <div class="w-[95%] mx-auto mt-3 h-12 flex justify-between px-5 py-2 shadow-md items-center bg-gray-light/40 rounded-md cursor-pointer">
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
    <span class=" text-xs text-gray">{{`${time ? time.durationValue : '0'}`}}</span>
    <span class=" text-gray">·</span>
    <span class=" text-xs text-gray">{{`${distance ? distance.distanceValue.toFixed(1) : '0'} км`}}</span>
  </div>
  </div>
</template>
<style lang='scss'>
    
</style>