<script>

  import {store} from '../data/store';
  import MoviesList from './MoviesList.vue';

  export default{
    name: 'AppMain',
    data(){
      return {
        store
      }
    },
    components:{
      MoviesList
    }
  }
</script>

<template>
  <main>  
    <MoviesList :type="'movie'" v-if="store.movie.results"/>
    
    <div class="container" v-else>
      <span>Nessun riusultato trovato</span>
    </div>


    <MoviesList :type="'tv'" v-if="store.tv.results"/>

    <div class="container" v-else>
      <span>Nessun riusultato trovato</span>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;

  main {
    color: white;
    padding-bottom: 80px;
  }
</style>