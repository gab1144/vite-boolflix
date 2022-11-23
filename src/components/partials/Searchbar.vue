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
    <div class="search">
      <input type="text" v-model="store.searchedTitle" placeholder="Cerca un titolo">
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
  
  span {
    color: white;
  }

  .search {
    padding: 5px 0;
    input{
      width: 80%;
      border: none;
      padding: 5px;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  
    button {
      width: 20%;
      border: none;
      padding: 5px;
      background-color: red;
      font-weight: 600;
      color: white;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  .filters-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>