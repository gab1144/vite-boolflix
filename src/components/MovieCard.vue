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
        let i = 0;
        while(i < 5 && store[this.typeCast][this.movieIndex][i] !== undefined){
            output += store[this.typeCast][this.movieIndex][i].name + ", ";
          i++;
        }

        output = output.substring(0, output.length -2) + '...';

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
      },
      filteredMovie(){
        
        if (store.movieFilter !== "" || store.tvFilter !== ""){
          if ((this.typeGenres === "tvGenres" && store.tvFilter === "") || (this.typeGenres === "movieGenres" && store.movieFilter === "")){
            return true;
          }
          if (this.typeGenres === "tvGenres"){
            console.log(this.typeGenres);
            console.log(this.movie.genre_ids.includes(store.tvFilter));
            return this.movie.genre_ids.includes(store.tvFilter);
            
          } else {
            console.log(this.typeGenres);
            console.log(this.movie.genre_ids.includes(store.movieFilter));
            return this.movie.genre_ids.includes(store.movieFilter);
          }
        } else {
          return true;
        }
      }
    }
  }
</script>

<template>
  <div class="card"    
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      v-if="filteredMovie">
    <CardImg :path="movie.poster_path" :altString="movie.title || movie.name"/>
      
    <div class="info-card" v-if="isHover">
      <span>Titolo: {{movie.title || movie.name}}</span>
      <span>Titolo originale: {{movie.original_title || movie.original_name}}</span>
      <LanguageFlag :language="movie.original_language"/>
      <VoteAverageStars :vote="movie.vote_average"/>
      <span>Cast: {{castList}}</span>
      <span>Generi: {{genresList}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
      overflow: auto;
      span {
        display: block;
      }
    }
}

/******************************
        RESPONSIVE
******************************/

@media screen and (max-width: 767px){
  .card {
    width: calc(calc(100% - 50px)/ 2);
    margin: 0 calc(50px / 4);
  }
}

@media screen and (max-width: 575px){
  .card {
    width: 90%;
    margin: 0 auto;
  }
}
</style>