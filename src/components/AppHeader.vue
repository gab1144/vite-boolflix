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
    <img src="/logo-boolflix.png" alt="Logo Boolflix" class="logo">
    <Searchbar @searchMovieorTv="$emit('search')"/>
  </header>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;

  header{
    background: linear-gradient(180deg, $header-background-color 50%, $main-background-color 100%);
    height: 80px;
    padding: 0 20px;
    @include vCenterSpcBtw();
    .logo {
      height: 60px;
    }
  }
</style>