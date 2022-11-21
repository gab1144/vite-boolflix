<script>
  import VoteAverageStars from './VoteAverageStars.vue';
  import LanguageFlag from './LanguageFlag.vue';

  export default{
    name: 'TvCard',
    components:{
      VoteAverageStars,
      LanguageFlag,
    },
    props:{
      tv: Object
    }
  }
</script>

<template>
  <div>
    <img :src="'https://image.tmdb.org/t/p/w342/'+ tv.backdrop_path" :alt="tv.name">
    <span>Titolo: {{tv.name}}</span>
    <br>
    <span>Titolo originale: {{tv.original_name}}</span>
    <br>
    <LanguageFlag :language="tv.original_language"/>
    <br>
    
    <span>Voto: </span>
    <VoteAverageStars :vote="tv.vote_average"/>
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  @use '../styles/general' as *;
  
  div {
    border: 1px solid red;
  }
</style>