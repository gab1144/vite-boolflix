<script>
  import {store} from '../data/store';
  import MovieCard from './MovieCard.vue';

  export default{
    name: 'MovieList',
    props:{
      type: String
    },
    data(){
      return {
        store
      }
    },
    components:{
      MovieCard
    },
    computed:{
      title(){
        if(this.type === "tv"){
          return "Serie TV";
        } else {
          return "Film";
        }
      }
    }
  }
</script>

<template>
  <div class="container">
    <h2>{{title}}</h2>
    <div class="card-area">
      <MovieCard
      v-for="(movie, index) of store[type].results"
      :key="movie.id"
      :movie="movie"
      :movieIndex="index"
      :typeCast= "type + 'Cast'"
      :typeGenres= "type + 'Genres'"
      :typeFiter= "type + 'Filter'"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;

  .card-area{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }
</style>