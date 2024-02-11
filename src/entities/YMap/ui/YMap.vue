<script setup lang='ts'>
import type { YMap } from '@yandex/ymaps3-types';
import { shallowRef, ref, onMounted } from 'vue';
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapZoomControl, YandexMapControls, YandexMapMarker, } from 'vue-yandex-maps';
import { settings } from '../model';
// import { Marker } from '@shared/ui/Marker';
import { getSprings } from '../api';
import { useRouter } from 'vue-router';


interface ISpring {
  coords: any
  id: number
name: string
photo: string
}

const map = shallowRef<null | YMap>(null);
const springs = ref<ISpring[]>()
const openMarker = ref()

const router = useRouter()

const getAllSprings = async () => {
  const { data, status } = await getSprings()
  if (status === 200) {
    springs.value = data.data.map((item: any) => {
      return {...item, coords: item.coords.reverse()}
    })
  }
}

onMounted(() => {
  getAllSprings()
})
</script>
<template lang='html'>
  <yandex-map
  v-model="map"
  :settings="settings"
  width="100vw"
  height="100vh"
  cursorGrab
>
<yandex-map-marker v-if="springs" v-for="(item) in springs" :key="item.id" :settings="{ coordinates: item.coords, onClick: () => openMarker = item.id }">
    <div
    v-if="openMarker === item.id"
    class="p-2 w-52 bg-gray-light rounded-md absolute bottom-14 left-[-100%] z-[999]"
  >
  <div class="flex gap-4 items-center">
    <img src="https://www.zhukgsn.ru/wp-content/uploads/2023/02/rodnik.jpg" alt="" class=" w-10 h-10 object-cover"/>
    <p class="w-fit">{{item.name}}</p>
    
  </div>
  <a-button style="width: 100%" class="mt-2" type="primary" @click="router.push(`/spring/${item.id}`)">Подробнее</a-button>
  </div>
<div class="rounded-full w-10 h-10 flex items-center justify-center bg-white border-4 border-[#ff4f4f] cursor-pointer">
  <i class="pi pi-slack text-cyan" />
</div>
</yandex-map-marker>
<yandex-map-default-scheme-layer/>
<yandex-map-default-features-layer />
<yandex-map-controls :settings="{ position: 'right' }">
  <yandex-map-zoom-control />
</yandex-map-controls>
</yandex-map>
</template>
<style lang='scss'>
    
</style>