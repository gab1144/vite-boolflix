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
  <div class="container" v-if="store.tvListData.results">
    <h2>Serie TV</h2>
    <div class="card-area">
      <TvCard
      v-for="tvSerie of store.tvListData.results"
      :key="tvSerie.id"
      :tv="tvSerie"/>
    </div>
  </div>

  <div class="container" v-else>
    <span>Nessun riusultato trovato</span>
  </div>

</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  .card-area{
    display: flex;
    flex-wrap: wrap;
  }
</style>