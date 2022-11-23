<script>
  import VoteAverageStars from './VoteAverageStars.vue';
  import LanguageFlag from './partials/LanguageFlag.vue';
  import CardImg from './partials/CardImg.vue';
  import {store} from '../data/store';

  export default{
    name: 'MovieCard',
    components:{
      CardImg,
      VoteAverageStars,
      LanguageFlag
    },
    props:{
      movie: Object,
      movieIndex: Number,
      typeCast: String,
      typeGenres: String
    },
    data(){
      return{
        isHover: false,
        store
      }
    },
    computed:{
      castList(){
        let output= "";
        for(let i = 0; i < 5; i++){
          if(i !== 4){
            output += store[this.typeCast][this.movieIndex][i].name + ", ";
          } else {
            output += store[this.typeCast][this.movieIndex][i].name + "...";
          }
        }
        return output;
      },
      genresList(){
        let output= "";
        for(let i = 0; i < this.movie.genre_ids.length; i++){
          let last = false;
          if(i === this.movie.genre_ids.length - 1){
            last = true;
          }
          for(const genre of store[this.typeGenres])
          if(genre.id === this.movie.genre_ids[i]){
            if(last){
              output += genre.name;  
            } else {
              output += genre.name + ", ";
            }
          }
        }
        return output;
      }
    }
  }
</script>

<template>
  <div class="card"    
      @mouseover="isHover = true"
      @mouseleave="isHover = false">
    <CardImg :path="movie.poster_path" :altString="movie.title || movie.name"/>
      
    <div class="info-card" v-if="isHover">
      <span>Titolo: {{movie.title || movie.name}}</span>
      <br>
      <span>Titolo originale: {{movie.original_title || movie.original_name}}</span>
      <br>
      <LanguageFlag :language="movie.original_language"/>
      <br>
      <VoteAverageStars :vote="movie.vote_average"/>
      <br>
      <span>Cast: {{castList}}</span>
      <br>
      <span>Generi: {{genresList}}</span>
    </div>
  </div>
</template>

<style lang="scss">
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  
  .card{
    width: calc(calc(100% - 50px)/ 3);
    margin: 0 calc(50px / 6);
    margin-bottom: 30px;
    border-radius: 10px;
    position: relative;
    transition: 0.4s ease-out;
    &:hover{
      transform: translateY(-20px);
      box-shadow: 8px 11px 16px 5px rgba(0,0,0,0.85);
    }
    .info-card{
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 10px;
      opacity: 1;
      transform: translateY(0px);
      position: absolute;
      top: 0;
      left: 0;
      padding: 30px;
    }
}
</style>