<script>
  export default{
    name: 'CardImg',
    props:{
      path: String,
      altString: String
    }
  }
</script>

<template>
  <div class="img-area">
    <img :src="'https://image.tmdb.org/t/p/w342/' + path" :alt="altString">
  </div>
</template>


<style lang="scss" scoped>
  @use '../../styles/partials/vars' as *;
  @use '../../styles/partials/mixin' as *;
  .img-area {
    &:hover{
      cursor: pointer;
    }
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
</style>