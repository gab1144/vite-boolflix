<script>
  export default{
    name: 'AppMain'
  }
</script>

<template>
  <main>
    <div class="container">
      <h2>main</h2>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  @use '../styles/partials/mixin' as *;

  main {
    background-color: $main-background-color;
    color: white;
  }
</style>