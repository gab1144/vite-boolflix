<script>
  import VoteAverageStars from './partials/VoteAverageStars.vue';
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
      
    <div class="info-padding" v-if="isHover">
      <div class="info-card">
        <div><span class="title">Titolo: </span>{{movie.title || movie.name}}</div>
        
        <div><span class="title">Titolo originale: </span>{{movie.original_title || movie.original_name}}</div>
        
        <LanguageFlag :language="movie.original_language"/>
        
        <VoteAverageStars :vote="movie.vote_average"/>
        
        <div><span class="title">Cast: </span>{{castList}}</div>
        
        <div><span class="title">Generi: </span>{{genresList}}</div>
        
        <div class="overview"><span>{{movie.overview}}</span></div>
      </div>

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
    .info-padding{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 10px;
      transform: translateY(0px);
    }
    .info-card{
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      margin: 15px;
      padding-right: 10px;
      opacity: 1;
      overflow: auto;
      div {
        margin-bottom: 15px;
      }
      .title {
        font-weight: 600;
        font-size: 18px;
      }
      .overview {
        margin-top: 30px;
      }
    }
}

/******************************
        RESPONSIVE
******************************/

@media screen and (max-width: 767px){
  .card {
    width: calc(calc(100% - 50px)/ 2);
    margin-left: calc(50px / 4);
    margin-right: calc(50px / 4);
  }
}

@media screen and (max-width: 575px){
  .card {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}
</style>