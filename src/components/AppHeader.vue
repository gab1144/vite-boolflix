<script>
  export default{
    name: 'AppHeader'
  }
</script>

<template>
  <header>
    <h1>BOOLFLIX</h1>
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
    h1 {
      color: red;
    }
  }

</style>