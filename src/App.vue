<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style>
/*spectral*/
@import url("https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;1,800&display=swap");

/*Karla*/
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");

/*Roboto*/
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
html {
  box-sizing: border-box;
  font-size: 16px;
  overflow-x: hidden;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

body {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: rgb(11, 12, 16);
}

#app {
  overflow-x: hidden;
  min-height: 100vh;
}

@media (min-width: 900px) {
  #app {
    grid-template-columns: 2rem auto;
    grid-template-rows: 1rem 2rem auto;
  }
}
</style>
