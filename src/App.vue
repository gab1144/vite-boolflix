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
        if(store.firstApi || store.searchedTitle !== ""  & !store.firstApi){

          let urlMovies = store.apiUrlMovies;
          let urlTv = store.apiUrlTv;
          
          if(store.firstApi){
            urlMovies = store.apiUrlMoviesTop;
            urlTv = store.apiUrlTvTop;
            store.firstApi= false;
          }
          
          axios.get(urlMovies, {
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
        
          axios.get(urlTv, {
            params: {
              api_key: store.apiKey,
              query: store.searchedTitle,
            }
          })
          .then(result=> {
            store.tvListData = result.data;
          })
          .catch(error => {
            console.log(error);
          })
        }
      }
    }, 
    mounted(){
      this.getMovies();
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