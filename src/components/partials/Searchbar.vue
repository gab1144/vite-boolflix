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
    <div>
      <input type="text" v-model="store.searchedTitle">
      <button @click="$emit('searchMovieorTv')">Cerca</button>
    </div>

    <div class="filters-area">
      <GenreSelect :typeGenre="'movieGenres'" :typeFilter="'movieFilter'"/>
      <GenreSelect :typeGenre="'tvGenres'" :typeFilter="'tvFilter'"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../styles/partials/vars' as *;
  @use '../../styles/partials/mixin' as *;
  
  input{
    width: 80%;
  }

  button {
    width: 20%;
  }
  span {
    color: white;
  }

  .filters-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>