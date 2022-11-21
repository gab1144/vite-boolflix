<script>
  import VoteAverageStars from './VoteAverageStars.vue';
  import LanguageFlag from './LanguageFlag.vue';
  import CardImg from './CardImg.vue';

  export default{
    name: 'TvCard',
    components:{
      CardImg,
      VoteAverageStars,
      LanguageFlag
    },
    props:{
      tv: Object
    },
    data(){
      return{
        isHover: false
      }
    }
  }
</script>

<template>
  <div class="tv-card">
    <CardImg :path="tv.poster_path" :altString="tv.name"    
      @mouseover="isHover = true"
      @mouseleave="isHover = false"/>
      
    <div class="info-tv" v-if="isHover">
      <span>Titolo: {{tv.name}}</span>
      <br>
      <span>Titolo originale: {{tv.original_name}}</span>
      <br>
      <LanguageFlag :language="tv.original_language"/>
      <br>
      <VoteAverageStars :vote="tv.vote_average"/>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  
  .tv-card {
    padding: 0 30px;
    width: calc(100% / 3);
    margin-bottom: 30px;
    position: relative;
  }
  .info-tv{
    padding: 0 30px;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>