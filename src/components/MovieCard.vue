<script>
  import { countries } from 'country-flag-icons';

  export default{
    name: 'MovieCard',
    props:{
      movie: Object
    },
    data(){
      return{
        countries
      }
    },
    computed:{
      countryControl(){
        if(this.movie.original_language === "en"){
          return "GB";
        } else {
          return this.movie.original_language.toUpperCase();
        }
      },
      country(){
        if(this.movie.original_language === "en"){
          return "gb";
        } else{
          return this.movie.original_language;
        }
      },
      starNumber(){
        return Math.ceil(this.movie.vote_average / 2);
      },
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
    <span v-if="countries.includes(countryControl)">Lingua: <span class="fi "
    :class="'fi-'+ country"></span></span>
    <span v-else>Lingua: {{movie.original_language}}</span>
    <br>
    
    <span>Voto: {{starNumber}}</span>

    <span
    v-for="index in starNumber">
      STAR
    </span>

    <span
    v-for="index in (5 - starNumber)">
      EMPTY STAR
    </span>
    
    <i class="fa-regular fa-star"></i>

  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  
  div {
    border: 1px solid red;
  }
</style>