<script>
  import { countries } from 'country-flag-icons';

  export default{
    name: 'TvCard',
    props:{
      tv: Object
    },
    data(){
      return{
        countries
      }
    },
    computed:{
      countryControl(){
        if(this.tv.original_language === "en"){
          return "GB";
        } else {
          return this.tv.original_language.toUpperCase();
        }
      },
      country(){
        if(this.tv.original_language === "en"){
          return "gb";
        } else{
          return this.tv.original_language;
        }
      }
    }
  }
</script>

<template>
  <div>
    <span>Titolo: {{tv.name}}</span>
    <br>
    <span>Titolo originale: {{tv.original_name}}</span>
    <br>
    <span v-if="countries.includes(countryControl)">Lingua: <span class="fi "
    :class="'fi-'+ country"></span></span>
    <span v-else>Lingua: {{tv.original_language}}</span>
    <br>
    <span>Voto: {{tv.vote_average}}</span>
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