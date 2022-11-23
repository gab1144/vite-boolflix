<script>

  export default{
    name: 'VoteAverageStars',
    props:{
      vote: Number
    },
    computed:{
      starNumber(){
        return Math.ceil(this.vote / 2);
      },
    }
  }
</script>

<template>
  <div>
    <span>Voto: </span>
    <i
    class="fa-solid fa-star"
    v-for="index in starNumber">
    </i>

    <i
    class="fa-regular fa-star"
    v-for="index in (5 - starNumber)">
    </i>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../styles/partials/vars' as *;
  @use '../../styles/partials/mixin' as *;
</style>