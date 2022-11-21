<script>
  import VoteAverageStars from './VoteAverageStars.vue';
  import LanguageFlag from './LanguageFlag.vue';
  import CardImg from './CardImg.vue';
  export default{
    name: 'MovieCard',
    components:{
      CardImg,
      VoteAverageStars,
      LanguageFlag
    },
    props:{
      movie: Object
    },
    data(){
      return{
        isHover: false
      }
    }
  }
</script>

<template>
  <div class="movie-card">
    <CardImg :path="movie.poster_path" :altString="movie.title"    
      @mouseover="isHover = true"
      @mouseleave="isHover = false"/>
      
    <div class="info-movie" v-if="isHover">
      <span>Titolo: {{movie.title}}</span>
      <br>
      <span>Titolo originale: {{movie.original_title}}</span>
      <br>
      <LanguageFlag :language="movie.original_language"/>
      <br>
      <VoteAverageStars :vote="movie.vote_average"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  
  .movie-card{
    padding: 0 30px;
    width: calc(100% / 3);
    margin-bottom: 30px;
    position: relative;
  }
  .info-movie{
    padding: 0 30px;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>