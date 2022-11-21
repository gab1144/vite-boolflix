<script>
  export default{
    name: 'MovieCard',
    props:{
      movie: Object
    }
  }
</script>

<template>
  <div>
    <span>Titolo: {{movie.title}}</span>
    <br>
    <span>Titolo originale: {{movie.original_title}}</span>
    <br>
    <span>Lingua: {{movie.original_language}}</span>
    <br>
    <span>Voto: {{movie.vote_average}}</span>
    1
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;
  
  div {
    border: 1px solid red;
  }
</style>