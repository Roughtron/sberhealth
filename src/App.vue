<template>
  <div id="app">
    <router-view/>

    <v-dialog />
  </div>
</template>

<style lang="stylus">
*
  font-family Avenir, Helvetica, Arial, sans-serif

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  margin-top 60px

.visually-hidden
  position absolute
  clip rect(0, 0, 0, 0)
</style>
