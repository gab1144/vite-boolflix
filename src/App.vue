<script>

  import axios from 'axios';
  import {store} from './data/store';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default {
    name: 'App',
    components:{
      AppHeader,
      AppMain
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getMovies(){
        axios.get(store.apiUrlMovies, {
          params: {
            api_key: store.apiKey,
            query: store.searchedTitle,
          }
        })
        .then(result=> {
          store.moviesListData = result.data;
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>

<template>

  <AppHeader @search="getMovies()"/>

  <AppMain/>

</template>

<style lang="scss">
  @use './styles/general';
</style>