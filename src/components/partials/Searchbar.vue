<script>
  import {store} from '../../data/store';
  export default{
    name: 'Searchbar',
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div>
    <input type="text" v-model="store.searchedTitle">
    <button @click="$emit('searchMovieorTv')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../styles/partials/vars' as *;
  @use '../../styles/partials/mixin' as *;

  header{
    background-color: $header-background-color;
    height: 80px;
    padding: 0 20px;
    @include vCenterSpcBtw();
    h1 {
      color: red;
    }
  }
</style>