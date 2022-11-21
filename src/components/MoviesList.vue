<script>
  import {store} from '../data/store';
  import MovieCard from './MovieCard.vue';

  export default{
    name: 'MovieList',
    data(){
      return {
        store
      }
    },
    components:{
      MovieCard
    }
  }
</script>

<template>
  <div class="container" v-if="store.moviesListData.results">
    <h2>Film</h2>
    <div class="card-area">
      <MovieCard
      v-for="movie of store.moviesListData.results"
      :key="movie.id"
      :movie="movie"/>
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