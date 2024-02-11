<script setup lang='ts'>

import { ref, onMounted } from 'vue';
import { Place } from '@entities/Place'
import { Description } from '@entities/Description'
import type { ISpring } from '../model'
import { getSpring } from '../api';
import { useRoute } from 'vue-router';
import { Loader } from '@shared/ui/Loader';

const springData = ref<ISpring>()

const route = useRoute()
const id = route.params.id

const getSpringById = async () => {
  const { data, status } = await getSpring(id)
  if (status === 200) {
    springData.value = data.data
  }
}

onMounted(() => {
  getSpringById()
})
</script>
<template lang='html'>
  <div  class="bg-white rounded-md shadow-md p-3 mt-3 min-h-96 w-full">
    <div v-if="springData">
      <Place :addres="springData.closest_street" :coords="`${springData.coords}`" :map-coords="springData.coords.reverse()" class="mt-2" />
      <div class="tablet:h-80 tablet:flex tablet:items-center tablet:justify-center">
        <Description :text="springData.notice" class="mt-2"/>
      </div>
    </div>
    <Loader v-else-if="!springData"/>
  </div>
</template>
<style lang='scss'>
    
</style>