<script>

  import { countries } from 'country-flag-icons';

  export default{
    name: 'LanguageFlag',
    props:{
      language: String
    },
    data(){
      return{
        countries
      }
    },
    computed:{
      countryControl(){
        if(this.language === "en"){
          return "GB";
        } else {
          return this.language.toUpperCase();
        }
      },
      country(){
        if(this.language === "en"){
          return "gb";
        } else{
          return this.language;
        }
      }
    }
  }
</script>

<template>
  <span v-if="countries.includes(countryControl)">Lingua: <span class="fi "
    :class="'fi-'+ country"></span></span>
    <span v-else>Lingua: {{language}}</span>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
</style>