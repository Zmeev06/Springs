<script setup lang='ts'>
import { SpringItem } from '@shared/ui/SpringItem';
import { useRouter } from 'vue-router';
import { getSprings } from '../api';
import { ref, onMounted, watch } from 'vue';
import { Search } from '@features/Search';
import { debounce } from "lodash";
import { segments, stateFilter, mobileSegments, radiusFilter } from '../model'
import Dropdown from 'primevue/dropdown';

interface ISpring {
  coords: any
  id: number
name: string
photo: string
}
const router = useRouter()

const springs = ref<ISpring[]>()
const currentSort = ref<any>(segments[0])
const sortValue = ref<any>({name: '', value:'-1'})
const searchValue = ref("");
const springState = ref({ label: '', value: '' })
const radiusValue = ref({name:'', value:''})

const getAllSprings = async (searchValue: string, sort: string) => {
  const { data, status } = await getSprings(searchValue, sort, springState.value.value, radiusValue.value.value)
  if (status === 200) {
    springs.value = data.data
  }
}

const debouncedGetItems = debounce((value: string) => {
    getAllSprings(value, sortValue.value.value);
}, 300);

watch(searchValue, () => {
  debouncedGetItems(searchValue.value);
});

watch(([currentSort, springState, radiusValue]), () => {
  sortValue.value = currentSort.value
  switch (currentSort.value) {
    case segments[0]:
      sortValue.value = {name: '',value:'-1'}
      break;
    case segments[1]:
      sortValue.value = {name: '',value:'0'}
      break;
    case segments[2]:
      sortValue.value = {name: '',value:'1'}
      break;
  }
  getAllSprings(searchValue.value, sortValue.value.value);
})

onMounted(() => {
  getAllSprings(searchValue.value, sortValue.value.value)
})
</script>
<template lang='html'>
  <Search v-model:search-value="searchValue"/>
  <div class="mx-auto mt-2 flex gap-5 flex-col tablet:flex-row w-4/5 items-center">
    <Dropdown v-model="springState" :options="stateFilter" optionLabel="name" placeholder="Состояние" class="w-full tablet:w-1/5"/>
    <a-segmented  v-model:value="currentSort" :options="segments" class="hidden tablet:block" style="width: fit-content; height: fit-content;"/>
    <Dropdown v-model="currentSort" :options="mobileSegments" optionLabel="name" placeholder="Сортировка" class="w-full tablet:hidden"/>
    <Dropdown v-model="radiusValue" :options="radiusFilter" optionLabel="name" placeholder="Радиус поиска" class="w-full tablet:w-1/5"/>
  </div>
  <div class="w-11/12 mx-auto mt-3 overflow-y-auto bg-white rounded-md shadow-md h-5/6">
    <SpringItem v-for="(item, index) in springs" :key="index" :name="item.name" @click="router.push(`/spring/${item.id}`)" :coords="item.coords"/>
  </div>
</template>
<style lang='scss'>
    
</style>