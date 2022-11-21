<script>
  import VoteAverageStars from './VoteAverageStars.vue';
  import LanguageFlag from './LanguageFlag.vue';

  export default{
    name: 'MovieCard',
    components:{
      VoteAverageStars,
      LanguageFlag,
    },
    props:{
      movie: Object
    }
  }
</script>

<template>
  <div>
    <img :src="'https://image.tmdb.org/t/p/w342/'+ movie.backdrop_path" :alt="movie.title">
    <span>Titolo: {{movie.title}}</span>
    <br>
    <span>Titolo originale: {{movie.original_title}}</span>
    <br>
    <LanguageFlag :language="movie.original_language"/>
    <br>
    <VoteAverageStars :vote="movie.vote_average"/>
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  
  div {
    border: 1px solid red;
  }
</style>