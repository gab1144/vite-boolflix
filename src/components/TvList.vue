<script>
  import {store} from '../data/store';
  import TvCard from './TvCard.vue';

  export default{
    name: 'TvList',
    data(){
      return {
        store
      }
    },
    components:{
      TvCard
    }
  }
</script>

<template>
  <div class="container">
    <h2>Serie TV</h2>
    <TvCard
      v-for="tvSerie of store.tvListData.results"
      :key="tvSerie.id"
      :tv="tvSerie"/>
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
</style>