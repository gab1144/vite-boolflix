<script>

  import {store} from '../data/store';
  import MoviesList from './MoviesList.vue';
  import TvList from './TvList.vue';

  export default{
    name: 'AppMain',
    data(){
      return {
        store
      }
    },
    components:{
      MoviesList,
      TvList
    }
  }
</script>

<template>
  <main>  
    <MoviesList/>
    
    <TvList/>
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