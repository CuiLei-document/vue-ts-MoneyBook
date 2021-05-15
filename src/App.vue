<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
 @import '~@/styles/reset.scss';
 @import '~@/styles/helper.scss';
 body{
   font-family:$font-hei;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   font-size: 16px;
   line-height:1.5;
   color: #2c3e50;
 }

</style>
