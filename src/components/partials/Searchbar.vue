<script>
  import {store} from '../../data/store';
  import GenreSelect from './GenreSelect.vue'
  export default{
    name: 'Searchbar',
    components:{
      GenreSelect
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div>
  <GenreSelect :typeGenre="'movieGenres'" :typeFilter="'movieFilter'"/>
  <GenreSelect :typeGenre="'tvGenres'" :typeFilter="'tvFilter'"/>
    <input type="text" v-model="store.searchedTitle">
    <button @click="$emit('searchMovieorTv')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../styles/partials/vars' as *;
  @use '../../styles/partials/mixin' as *;

  span {
    color: white;
  }
</style>