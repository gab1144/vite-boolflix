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
  <div class="card">
    <CardImg :path="movie.poster_path" :altString="movie.title || movie.name"    
      @mouseover="isHover = true"
      @mouseleave="isHover = false"/>
      
    <div class="info-card" v-if="isHover">
      <span>Titolo: {{movie.title || movie.name}}</span>
      <br>
      <span>Titolo originale: {{movie.original_title || movie.original_name}}</span>
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
  
  .card{
    padding: 0 30px;
    width: calc(100% / 3);
    margin-bottom: 30px;
    position: relative;
  }
  .info-card{
    padding: 0 30px;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>