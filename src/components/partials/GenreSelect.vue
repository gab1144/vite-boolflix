<script>
  import {store} from '../../data/store';
  export default{
    name: 'GenreSelect',
    props:{
      typeGenre: String,
      typeFilter: String,
    },
    data(){
      return{
        store
      }
    },
    computed:{
      title(){
        if(this.typeGenre === "tvGenres"){
          return "Serie TV";
        } else {
          return "Film";
        }
      }
    }
  }
</script>

<template>
  <div class="filter">
    <span>Genere {{title}}: </span>
    <select class="form-select" v-model="store[typeFilter]">
      <option selected value="">All</option>
      <option v-for="(genre, index) of store[typeGenre]" :key="index" :value="genre.id">{{genre.name}}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../styles/partials/vars' as *;
  @use '../../styles/partials/mixin' as *;

  span {
    color: white;
    display: block;
    width: 40%;
  }
  select{
    width: 60%;
  }
  .filter{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>