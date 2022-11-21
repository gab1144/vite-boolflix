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
      <MovieCard
        v-for="movie of store.moviesListData.results"
        :key="movie.id"
        :movie="movie"/>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
</style>