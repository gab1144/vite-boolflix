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
              for(let i = 0; i < store[type].results.length; i++){
                let id = parseInt(store[type].results[i].id);
                this.getCast(type, type + 'Cast', id);
              }
          })
          .catch(error => {
            console.log(error);
          })
        }
      },
      startSearch(){
        store.movieCast= [];
        store.tvCast= [];
        this.getMovies('movie');
        this.getMovies('tv');
      },
      getCast(type, castType, id){
        const url= `http://api.themoviedb.org/3/${type}/`;
        axios.get(url + id + "/credits", {
          params: {
            api_key: store.apiKey,
            language: 'it-IT'
          }
        })
        .then(result=> {
            const cast = [];
            for(let i = 0; i <  5; i++){
              cast.push(result.data.cast[i]);
            }
            store[castType].push(cast)
        })
        .catch(error => {
          console.log(error);
        })
      },
      getMovieGenres(type, genresType){
        const url = `https://api.themoviedb.org/3/genre/${type}/list`;
        axios.get(url, {
          params: {
            api_key: store.apiKey,
            language: 'it-IT'
          }
        })
        .then(result=> {
            store[genresType] = result.data.genres;
        })
        .catch(error => {
          console.log(error);
        })
      },
    }, 
    mounted(){
      this.startSearch();
      this.getMovieGenres('movie', 'movieGenres');
      this.getMovieGenres('tv', 'tvGenres');

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