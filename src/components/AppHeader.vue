<script>
  import Searchbar from './Searchbar.vue';
  
  export default{
    name: 'AppHeader',
    components:{
      Searchbar
    }
  }
</script>

<template>
  <header>
    <img src="/public/logo-boolflix.png" alt="Logo Boolflix" class="logo">
    <Searchbar @searchMovieorTv="$emit('search')"/>
  </header>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;

  header{
    background-color: $header-background-color;
    height: 80px;
    padding: 0 20px;
    @include vCenterSpcBtw();
    .logo {
      height: 60px;
    }
  }
</style>