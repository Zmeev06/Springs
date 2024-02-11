<script setup lang='ts'>
import { Status } from '@features/Status'
import { SpringDataView } from '@features/SpringDataView'
import { ref, onMounted } from 'vue';
import { getSpring } from '../api';
import { useRoute } from 'vue-router';
import type {ISpring} from '../model'

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
  <div class="flex flex-col items-center px-7">
    <h2 class="text-lg">{{springData?.name}}</h2>
    <p class="text-sm">{{springData?.cadastral_number}}</p>
    <a-image
    :width="300"
    :height="200"
    class="object-cover mt-3"
    src="https://www.zhukgsn.ru/wp-content/uploads/2023/02/rodnik.jpg"
  />
  <Status :status="springData?.general_status"/>
  <SpringDataView />
  </div>
</template>
<style lang='scss'>
    
</style>@//features/SpringDataView