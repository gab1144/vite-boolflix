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
      getMovies(type){
        if(store.firstApi || store.searchedTitle !== ""  & !store.firstApi){
          let url;
          if(store.firstApi){
            if(type === 'movie'){
              url = store.apiUrlMoviesTop;
            } else {
              url = store.apiUrlTvTop;
              store.firstApi= false;
            }
          } else {
            url = store.apiUrl + type;
          }

          axios.get(url, {
            params: {
              api_key: store.apiKey,
              query: store.searchedTitle,
              language: 'it-IT'
            }
          })
          .then(result=> {
            store[type] = result.data;
          })
          .catch(error => {
            console.log(error);
          })
        }
      },
      startSearch(){
        this.getMovies('movie');
        this.getMovies('tv');
      }
    }, 
    mounted(){
      this.startSearch();
    }
  }
</script>

<template>

  <AppHeader @search="startSearch()"/>

  <AppMain/>

</template>

<style lang="scss">
  @use './styles/general';
</style>